export class AnonymousFbUserClass {
	constructor(
		public isAnonymous: Boolean = false,
		public refreshToken: String = '',
		public uid: String = '',
		public creationTime: String = '',
		public lastSignInTime: String = ''
	) { }
}
