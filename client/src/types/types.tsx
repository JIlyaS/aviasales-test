import { ReactNode } from 'react';

interface SegmentsInterface {
  map: any;
  length: ReactNode;
  origin: String;
  destination: String;
  duration: Number;
  stops: Array<String>;
  date: any;
}

export interface TicketInterface {
  price: Number;
  carrier: String;
  segments: [{ [key: string]: SegmentsInterface }];
}