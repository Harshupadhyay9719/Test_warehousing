const WEAK_JWT_SECRETS = new Set(['secret', 'change-me', 'changeme', 'password']);

export function getJwtSecret() {
  const secret = process.env.JWT_SECRET?.trim();

  if (!secret || WEAK_JWT_SECRETS.has(secret.toLowerCase()) || secret.length < 32) {
    throw new Error('JWT_SECRET must be set to a strong random value of at least 32 characters.');
  }

  return secret;
}
