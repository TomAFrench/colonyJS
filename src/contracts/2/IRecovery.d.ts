/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface IRecoveryInterface extends Interface {
  functions: {
    enterRecoveryMode: TypedFunctionDescription<{ encode([]: []): string }>;

    exitRecoveryMode: TypedFunctionDescription<{ encode([]: []): string }>;

    approveExitRecovery: TypedFunctionDescription<{ encode([]: []): string }>;

    isInRecoveryMode: TypedFunctionDescription<{ encode([]: []): string }>;

    setRecoveryRole: TypedFunctionDescription<{
      encode([_user]: [string]): string;
    }>;

    removeRecoveryRole: TypedFunctionDescription<{
      encode([_user]: [string]): string;
    }>;

    numRecoveryRoles: TypedFunctionDescription<{ encode([]: []): string }>;

    setStorageSlotRecovery: TypedFunctionDescription<{
      encode([_slot, _value]: [BigNumberish, Arrayish]): string;
    }>;

    checkNotAdditionalProtectedVariable: TypedFunctionDescription<{
      encode([_slot]: [BigNumberish]): string;
    }>;
  };

  events: {};
}

export class IRecovery extends Contract {
  connect(signerOrProvider: Signer | Provider | string): IRecovery;
  attach(addressOrName: string): IRecovery;
  deployed(): Promise<IRecovery>;

  on(event: EventFilter | string, listener: Listener): IRecovery;
  once(event: EventFilter | string, listener: Listener): IRecovery;
  addListener(eventName: EventFilter | string, listener: Listener): IRecovery;
  removeAllListeners(eventName: EventFilter | string): IRecovery;
  removeListener(eventName: any, listener: Listener): IRecovery;

  interface: IRecoveryInterface;

  functions: {
    /**
     * Put colony network mining into recovery mode. Can only be called by user with recovery role.
     */
    enterRecoveryMode(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * Exit recovery mode, can be called by anyone if enough whitelist approvals are given.
     */
    exitRecoveryMode(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * Indicate approval to exit recovery mode. Can only be called by user with recovery role.
     */
    approveExitRecovery(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * Is colony network in recovery mode.
     * @returns inRecoveryMode Return true if recovery mode is active, false otherwise
     */
    isInRecoveryMode(): Promise<boolean>;

    /**
     * Set new colony recovery role. Can be called by root.
     * @param _user User we want to give a recovery role to
     */
    setRecoveryRole(
      _user: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * Remove colony recovery role. Can only be called by root role.
     * @param _user User we want to remove recovery role from
     */
    removeRecoveryRole(
      _user: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * Return number of recovery roles.
     * @returns numRoles Number of users with the recovery role.
     */
    numRecoveryRoles(): Promise<BigNumber>;

    /**
     * certain critical variables are protected from editing in this function
     * Update value of arbitrary storage variable. Can only be called by user with recovery role.
     * @param _slot Uint address of storage slot to be updated
     * @param _value word of data to be set
     */
    setStorageSlotRecovery(
      _slot: BigNumberish,
      _value: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    /**
     * No return value, but should throw if protected.This is public, but is only expected to be called from ContractRecovery; no need toexpose this to any users.
     * Check whether the supplied slot is a protected variable specific to this contract
     * @param _slot The storage slot number to check.
     */
    checkNotAdditionalProtectedVariable(_slot: BigNumberish): Promise<void>;
  };

  /**
   * Put colony network mining into recovery mode. Can only be called by user with recovery role.
   */
  enterRecoveryMode(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * Exit recovery mode, can be called by anyone if enough whitelist approvals are given.
   */
  exitRecoveryMode(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * Indicate approval to exit recovery mode. Can only be called by user with recovery role.
   */
  approveExitRecovery(
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * Is colony network in recovery mode.
   * @returns inRecoveryMode Return true if recovery mode is active, false otherwise
   */
  isInRecoveryMode(): Promise<boolean>;

  /**
   * Set new colony recovery role. Can be called by root.
   * @param _user User we want to give a recovery role to
   */
  setRecoveryRole(
    _user: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * Remove colony recovery role. Can only be called by root role.
   * @param _user User we want to remove recovery role from
   */
  removeRecoveryRole(
    _user: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * Return number of recovery roles.
   * @returns numRoles Number of users with the recovery role.
   */
  numRecoveryRoles(): Promise<BigNumber>;

  /**
   * certain critical variables are protected from editing in this function
   * Update value of arbitrary storage variable. Can only be called by user with recovery role.
   * @param _slot Uint address of storage slot to be updated
   * @param _value word of data to be set
   */
  setStorageSlotRecovery(
    _slot: BigNumberish,
    _value: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  /**
   * No return value, but should throw if protected.This is public, but is only expected to be called from ContractRecovery; no need toexpose this to any users.
   * Check whether the supplied slot is a protected variable specific to this contract
   * @param _slot The storage slot number to check.
   */
  checkNotAdditionalProtectedVariable(_slot: BigNumberish): Promise<void>;

  filters: {};

  estimate: {
    enterRecoveryMode(): Promise<BigNumber>;

    exitRecoveryMode(): Promise<BigNumber>;

    approveExitRecovery(): Promise<BigNumber>;

    isInRecoveryMode(): Promise<BigNumber>;

    setRecoveryRole(_user: string): Promise<BigNumber>;

    removeRecoveryRole(_user: string): Promise<BigNumber>;

    numRecoveryRoles(): Promise<BigNumber>;

    setStorageSlotRecovery(
      _slot: BigNumberish,
      _value: Arrayish
    ): Promise<BigNumber>;

    checkNotAdditionalProtectedVariable(
      _slot: BigNumberish
    ): Promise<BigNumber>;
  };
}