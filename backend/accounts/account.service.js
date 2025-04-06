const db = require('../_helpers/db');
const { Role } = require('../_helpers/role');
const { sendEmail } = require('../_helpers/send-email');

module.exports = {
  register
};

async function register(params) {
  // Validate if email exists
  if (await db.Account.findOne({ where: { email: params.email })) {
    throw 'Email "' + params.email + '" is already registered';
  }

  // Create account
  const account = new db.Account(params);
  account.role = Role.User; // Default role
  account.verificationToken = randomTokenString();
  
  // Hash password
  account.passwordHash = await hash(params.password);
  
  // Save account
  await account.save();

  // Send verification email
  await sendVerificationEmail(account);
}

async function verifyEmail({ token }) {
    const account = await db.Account.findOne({ 
      where: { verificationToken: token } 
    });
    
    if (!account) throw 'Verification failed';
    
    account.verified = new Date();
    account.verificationToken = null;
    await account.save();
  }

  async function authenticate({ email, password }) {
    const account = await db.Account.findOne({ where: { email } });
    
    if (!account || !account.verified || 
        !(await bcrypt.compare(password, account.passwordHash))) {
      throw 'Email or password is incorrect';
    }
  
    // Generate JWT token
    const token = generateJwtToken(account);
    
    // Generate refresh token
    const refreshToken = generateRefreshToken(account);
    
    return {
      ...basicDetails(account),
      token,
      refreshToken
    };
  }