import { faker } from '@faker-js/faker';

/**
 * Generates a random, syntactically valid contact-form payload for a single
 * test run. Called directly from spec files so every run exercises the form
 * with fresh, unique data instead of a hardcoded value.
 */
export function randomValidContact(companyDomain) {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  return {
    firstName,
    lastName,
    email: faker.internet.email({ firstName, lastName, provider: companyDomain }),
  };
}

/**
 * Generates a random, invalid e-mail string (missing "@" and domain) to
 * exercise the negative validation path.
 */
export function randomInvalidEmail() {
  return faker.internet.username().replace(/[^a-zA-Z0-9]/g, '');
}
