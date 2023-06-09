import { createContext } from "react";
import { CompanyType } from "./Company.interfaces";

export const CompanyContext = createContext<CompanyType>({
  isLoading: false,
  profileUpdated: false,
  handleUpdateProfile: () => Promise.resolve(),
  devicesAvailable: [],
  handleDevicesAvailable: () => Promise.resolve(),
  handleCreateCompanyLocal: () => Promise.resolve(),
  companyLocals: [],
  handleCompanyLocals: () => Promise.resolve(),
  handleUpdateCompanyLocal: () => Promise.resolve(),
  handleDeleteCompanyLocal: () => Promise.resolve(),
  handleAddDeviceToCompany: () => Promise.resolve(),
  companyDevices: [],
  handleGetAllCompanyDevices: () => Promise.resolve(),
  handleDeleteCompanyDevice: () => Promise.resolve(),
  handleInsertValueToCompanyDevice: () => Promise.resolve(),
  overviewData: [],
  handleOverview: () => Promise.resolve(),
  handleCurrentLocal: () => Promise.resolve(),
  currentLocal: 0,
  error: false,
  handleError: () => Promise.resolve(),
  profileData: {
    name: "",
    cnpj: "",
    email: "",
    owner: "",
    phone: "",
  },
  handleProfile: () => Promise.resolve(),
  handleUpdateCompanyDevice: () => Promise.resolve(),
  message: "",
  handleClearMessage: () => Promise.resolve(),
});
