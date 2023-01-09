import Web3 from 'web3';
import ContractConstructor, { Contract } from 'web3-eth-contract';
import { AbiItem } from 'web3-utils';

export function makeBatchRequest(web3: Web3, calls: Web3Call[]): Promise<any[]> {
  const batch = new web3.BatchRequest();

  const promises = calls.map(call => {
    return new Promise((res, rej) => {
      const req = call.method.request(call.params, (err, data) => {
        if (err) rej(err);
        else res(data);
      });
      batch.add(req);
    });
  });
  batch.execute();

  return Promise.all(promises);
}

export interface Web3Call {
  method: any;
  params: any;
}

export function createContract(jsonInterface: AbiItem[], address: string): Contract {
  return new (ContractConstructor as unknown as typeof Contract)(jsonInterface, address);
}
