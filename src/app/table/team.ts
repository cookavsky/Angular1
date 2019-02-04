export class Team {
    constructor(
        public id: number,
        public name: string,
        public matches: number,
        public win: number,
        public draw: number,
        public lose: number,
        public goals: string,
        public points: number,
        public form: string
    ) { }
}