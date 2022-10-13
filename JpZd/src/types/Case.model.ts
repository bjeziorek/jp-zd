export type CaseType='M'|'D'|'C'|'B'|'N'|'Msc'|'W'|'M_pl'|'D_pl'|'C_pl'|'B_pl'|'N_pl'|'Msc_pl'|'W_pl'

export interface Case {
    M: string,
    D: string,
    C: string,
    B: string,
    N: string,
    Msc: string,
    W: string,
    M_pl?: string,
    D_pl?: string,
    C_pl?: string,
    B_pl?: string,
    N_pl?: string,
    Msc_pl?: string,
    W_pl?: string,
}

