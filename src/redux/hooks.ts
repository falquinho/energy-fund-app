import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, ReduxState } from ".";

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useReduxSelector: TypedUseSelectorHook<ReduxState> = useSelector; 