export interface Organization {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Property {
  id: string;
  name: string;
  description?: string;
  address: string;
  organizationId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Room {
  id: string;
  name: string;
  type: string;
  floor?: number;
  propertyId: string;
  occupied: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Visit {
  id: string;
  visitorId: string;
  propertyId: string;
  roomId: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
}

export interface Visitor {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
}