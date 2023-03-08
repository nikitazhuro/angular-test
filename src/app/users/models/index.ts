export class UserCompany {
  readonly name: string;
  readonly catchPhrase: string;
  readonly bs: string;
}

export class User {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly company: UserCompany;
}
