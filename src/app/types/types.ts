export type Bill = {
    id: number;
    clientNumber: string;
    date: string;
    dueDate: string;
    eletricityConsumption: number;
    eletricityCost: number;
    sceeeeConsumption: number;
    sceeeeCost: number;
    gdiEnergyConsumption: number;
    gdiEnergyCost: number;
    publicContribution: number;
    fileUrl: string;
    fileKey: string;
  };
  
export type FormDataType = {
  pdfFile: File;
};

export type Inputs = {
  clientNumber: string;
};