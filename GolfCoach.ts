import { Coach } from "./Coach"; 

export class GolfCoach implements Coach {
    getDailyWorkout() : string {
        return "Practice those swings and hit 1000 balls"
    }
}