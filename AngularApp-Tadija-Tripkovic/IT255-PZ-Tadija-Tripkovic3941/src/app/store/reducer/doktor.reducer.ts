import { EnumDoktorAction, DoctorActions } from "../action/doktor.action"
import { initalDoktorState } from "../state/doktor.state"

export function doktorReducer(
    state = initalDoktorState,
    action: DoctorActions
){
    switch(action.type){
        case EnumDoktorAction.GetDoctorSuccess:{
            console.log("Bilo sta", action.payload)
            return{
                ...state,
                doktori:action.payload
            };
        }
        default:
            return state;
    }
}