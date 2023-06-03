import {
  Approval as ApprovalEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Transfer as TransferEvent,
} from "../generated/PEPE/PEPE";
import {
  /*Approval, OwnershipTransferred,*/ Transfer,
} from "../generated/schema";
import { Address, BigInt } from "@graphprotocol/graph-ts";

// export function handleApproval(event: ApprovalEvent): void {
//   let entity = new Approval(
//     event.transaction.hash.concatI32(event.logIndex.toI32())
//   )
//   entity.owner = event.params.owner
//   entity.spender = event.params.spender
//   entity.value = event.params.value

//   entity.blockNumber = event.block.number
//   entity.blockTimestamp = event.block.timestamp
//   entity.transactionHash = event.transaction.hash

//   entity.save()
// }

// export function handleOwnershipTransferred(
//   event: OwnershipTransferredEvent
// ): void {
//   let entity = new OwnershipTransferred(
//     event.transaction.hash.concatI32(event.logIndex.toI32())
//   )
//   entity.previousOwner = event.params.previousOwner
//   entity.newOwner = event.params.newOwner

//   entity.blockNumber = event.block.number
//   entity.blockTimestamp = event.block.timestamp
//   entity.transactionHash = event.transaction.hash

//   entity.save()
// }

export function handleTransfer(event: TransferEvent): void {
  let targetAddress = Address.fromString(
    "0x9adf8D6AccB0dF6B7A1FE949445c4BF241883b81"
  );

  if (
    event.params.from.equals(targetAddress) ||
    event.params.to.equals(targetAddress)
  ) {
    let entity = new Transfer(
      event.transaction.hash.concatI32(event.logIndex.toI32())
    );

    entity.from = event.params.from;
    entity.to = event.params.to;
    entity.value = event.params.value;

    entity.blockNumber = event.block.number;
    entity.blockTimestamp = event.block.timestamp;
    entity.transactionHash = event.transaction.hash;

    entity.save();
  }
}
