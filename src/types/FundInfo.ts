import { FundData } from "./FundData";

export type FundInfo = Omit<FundData, 'history'>;