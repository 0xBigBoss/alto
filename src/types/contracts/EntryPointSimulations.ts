export const EntryPointV06SimulationsAbi = [
  {
    inputs: [
      {
        name: "reason",
        type: "string",
      },
    ],
    name: "Error",
    type: "error",
  },
] as const;

export const EntryPointV07SimulationsAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  { type: "receive", stateMutability: "payable" },
  {
    type: "function",
    name: "addStake",
    inputs: [
      {
        name: "unstakeDelaySec",
        type: "uint32",
        internalType: "uint32",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "balanceOf",
    inputs: [{ name: "account", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "delegateAndRevert",
    inputs: [
      { name: "target", type: "address", internalType: "address" },
      { name: "data", type: "bytes", internalType: "bytes" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "depositTo",
    inputs: [{ name: "account", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "deposits",
    inputs: [{ name: "", type: "address", internalType: "address" }],
    outputs: [
      { name: "deposit", type: "uint256", internalType: "uint256" },
      { name: "staked", type: "bool", internalType: "bool" },
      { name: "stake", type: "uint112", internalType: "uint112" },
      {
        name: "unstakeDelaySec",
        type: "uint32",
        internalType: "uint32",
      },
      { name: "withdrawTime", type: "uint48", internalType: "uint48" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getDepositInfo",
    inputs: [{ name: "account", type: "address", internalType: "address" }],
    outputs: [
      {
        name: "info",
        type: "tuple",
        internalType: "struct IStakeManager.DepositInfo",
        components: [
          { name: "deposit", type: "uint256", internalType: "uint256" },
          { name: "staked", type: "bool", internalType: "bool" },
          { name: "stake", type: "uint112", internalType: "uint112" },
          {
            name: "unstakeDelaySec",
            type: "uint32",
            internalType: "uint32",
          },
          {
            name: "withdrawTime",
            type: "uint48",
            internalType: "uint48",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getNonce",
    inputs: [
      { name: "sender", type: "address", internalType: "address" },
      { name: "key", type: "uint192", internalType: "uint192" },
    ],
    outputs: [{ name: "nonce", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getSenderAddress",
    inputs: [{ name: "initCode", type: "bytes", internalType: "bytes" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getUserOpHash",
    inputs: [
      {
        name: "userOp",
        type: "tuple",
        internalType: "struct PackedUserOperation",
        components: [
          { name: "sender", type: "address", internalType: "address" },
          { name: "nonce", type: "uint256", internalType: "uint256" },
          { name: "initCode", type: "bytes", internalType: "bytes" },
          { name: "callData", type: "bytes", internalType: "bytes" },
          {
            name: "accountGasLimits",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "preVerificationGas",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "gasFees", type: "bytes32", internalType: "bytes32" },
          {
            name: "paymasterAndData",
            type: "bytes",
            internalType: "bytes",
          },
          { name: "signature", type: "bytes", internalType: "bytes" },
        ],
      },
    ],
    outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "handleAggregatedOps",
    inputs: [
      {
        name: "opsPerAggregator",
        type: "tuple[]",
        internalType: "struct IEntryPoint.UserOpsPerAggregator[]",
        components: [
          {
            name: "userOps",
            type: "tuple[]",
            internalType: "struct PackedUserOperation[]",
            components: [
              {
                name: "sender",
                type: "address",
                internalType: "address",
              },
              {
                name: "nonce",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "initCode",
                type: "bytes",
                internalType: "bytes",
              },
              {
                name: "callData",
                type: "bytes",
                internalType: "bytes",
              },
              {
                name: "accountGasLimits",
                type: "bytes32",
                internalType: "bytes32",
              },
              {
                name: "preVerificationGas",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "gasFees",
                type: "bytes32",
                internalType: "bytes32",
              },
              {
                name: "paymasterAndData",
                type: "bytes",
                internalType: "bytes",
              },
              {
                name: "signature",
                type: "bytes",
                internalType: "bytes",
              },
            ],
          },
          {
            name: "aggregator",
            type: "address",
            internalType: "contract IAggregator",
          },
          { name: "signature", type: "bytes", internalType: "bytes" },
        ],
      },
      {
        name: "beneficiary",
        type: "address",
        internalType: "address payable",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "handleOps",
    inputs: [
      {
        name: "ops",
        type: "tuple[]",
        internalType: "struct PackedUserOperation[]",
        components: [
          { name: "sender", type: "address", internalType: "address" },
          { name: "nonce", type: "uint256", internalType: "uint256" },
          { name: "initCode", type: "bytes", internalType: "bytes" },
          { name: "callData", type: "bytes", internalType: "bytes" },
          {
            name: "accountGasLimits",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "preVerificationGas",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "gasFees", type: "bytes32", internalType: "bytes32" },
          {
            name: "paymasterAndData",
            type: "bytes",
            internalType: "bytes",
          },
          { name: "signature", type: "bytes", internalType: "bytes" },
        ],
      },
      {
        name: "beneficiary",
        type: "address",
        internalType: "address payable",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "incrementNonce",
    inputs: [{ name: "key", type: "uint192", internalType: "uint192" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "innerHandleOp",
    inputs: [
      { name: "callData", type: "bytes", internalType: "bytes" },
      {
        name: "opInfo",
        type: "tuple",
        internalType: "struct EntryPoint.UserOpInfo",
        components: [
          {
            name: "mUserOp",
            type: "tuple",
            internalType: "struct EntryPoint.MemoryUserOp",
            components: [
              {
                name: "sender",
                type: "address",
                internalType: "address",
              },
              {
                name: "nonce",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "verificationGasLimit",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "callGasLimit",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "paymasterVerificationGasLimit",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "paymasterPostOpGasLimit",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "preVerificationGas",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "paymaster",
                type: "address",
                internalType: "address",
              },
              {
                name: "maxFeePerGas",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "maxPriorityFeePerGas",
                type: "uint256",
                internalType: "uint256",
              },
            ],
          },
          {
            name: "userOpHash",
            type: "bytes32",
            internalType: "bytes32",
          },
          { name: "prefund", type: "uint256", internalType: "uint256" },
          {
            name: "contextOffset",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "preOpGas", type: "uint256", internalType: "uint256" },
        ],
      },
      { name: "context", type: "bytes", internalType: "bytes" },
    ],
    outputs: [
      {
        name: "actualGasCost",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "nonceSequenceNumber",
    inputs: [
      { name: "", type: "address", internalType: "address" },
      { name: "", type: "uint192", internalType: "uint192" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "simulateCallData",
    inputs: [
      {
        name: "op",
        type: "tuple",
        internalType: "struct PackedUserOperation",
        components: [
          { name: "sender", type: "address", internalType: "address" },
          { name: "nonce", type: "uint256", internalType: "uint256" },
          { name: "initCode", type: "bytes", internalType: "bytes" },
          { name: "callData", type: "bytes", internalType: "bytes" },
          {
            name: "accountGasLimits",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "preVerificationGas",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "gasFees", type: "bytes32", internalType: "bytes32" },
          {
            name: "paymasterAndData",
            type: "bytes",
            internalType: "bytes",
          },
          { name: "signature", type: "bytes", internalType: "bytes" },
        ],
      },
      { name: "target", type: "address", internalType: "address" },
      { name: "targetCallData", type: "bytes", internalType: "bytes" },
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IEntryPointSimulations.TargetCallResult",
        components: [
          { name: "gasUsed", type: "uint256", internalType: "uint256" },
          { name: "success", type: "bool", internalType: "bool" },
          { name: "returnData", type: "bytes", internalType: "bytes" },
        ],
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "simulateHandleOp",
    inputs: [
      {
        name: "op",
        type: "tuple",
        internalType: "struct PackedUserOperation",
        components: [
          { name: "sender", type: "address", internalType: "address" },
          { name: "nonce", type: "uint256", internalType: "uint256" },
          { name: "initCode", type: "bytes", internalType: "bytes" },
          { name: "callData", type: "bytes", internalType: "bytes" },
          {
            name: "accountGasLimits",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "preVerificationGas",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "gasFees", type: "bytes32", internalType: "bytes32" },
          {
            name: "paymasterAndData",
            type: "bytes",
            internalType: "bytes",
          },
          { name: "signature", type: "bytes", internalType: "bytes" },
        ],
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IEntryPointSimulations.ExecutionResult",
        components: [
          {
            name: "preOpGas",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "paid", type: "uint256", internalType: "uint256" },
          {
            name: "accountValidationData",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "paymasterValidationData",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "targetSuccess", type: "bool", internalType: "bool" },
          { name: "targetResult", type: "bytes", internalType: "bytes" },
        ],
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "simulateValidation",
    inputs: [
      {
        name: "userOp",
        type: "tuple",
        internalType: "struct PackedUserOperation",
        components: [
          { name: "sender", type: "address", internalType: "address" },
          { name: "nonce", type: "uint256", internalType: "uint256" },
          { name: "initCode", type: "bytes", internalType: "bytes" },
          { name: "callData", type: "bytes", internalType: "bytes" },
          {
            name: "accountGasLimits",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "preVerificationGas",
            type: "uint256",
            internalType: "uint256",
          },
          { name: "gasFees", type: "bytes32", internalType: "bytes32" },
          {
            name: "paymasterAndData",
            type: "bytes",
            internalType: "bytes",
          },
          { name: "signature", type: "bytes", internalType: "bytes" },
        ],
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct IEntryPointSimulations.ValidationResult",
        components: [
          {
            name: "returnInfo",
            type: "tuple",
            internalType: "struct IEntryPoint.ReturnInfo",
            components: [
              {
                name: "preOpGas",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "prefund",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "accountValidationData",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "paymasterValidationData",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "paymasterContext",
                type: "bytes",
                internalType: "bytes",
              },
            ],
          },
          {
            name: "senderInfo",
            type: "tuple",
            internalType: "struct IStakeManager.StakeInfo",
            components: [
              {
                name: "stake",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "unstakeDelaySec",
                type: "uint256",
                internalType: "uint256",
              },
            ],
          },
          {
            name: "factoryInfo",
            type: "tuple",
            internalType: "struct IStakeManager.StakeInfo",
            components: [
              {
                name: "stake",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "unstakeDelaySec",
                type: "uint256",
                internalType: "uint256",
              },
            ],
          },
          {
            name: "paymasterInfo",
            type: "tuple",
            internalType: "struct IStakeManager.StakeInfo",
            components: [
              {
                name: "stake",
                type: "uint256",
                internalType: "uint256",
              },
              {
                name: "unstakeDelaySec",
                type: "uint256",
                internalType: "uint256",
              },
            ],
          },
          {
            name: "aggregatorInfo",
            type: "tuple",
            internalType: "struct IEntryPoint.AggregatorStakeInfo",
            components: [
              {
                name: "aggregator",
                type: "address",
                internalType: "address",
              },
              {
                name: "stakeInfo",
                type: "tuple",
                internalType: "struct IStakeManager.StakeInfo",
                components: [
                  {
                    name: "stake",
                    type: "uint256",
                    internalType: "uint256",
                  },
                  {
                    name: "unstakeDelaySec",
                    type: "uint256",
                    internalType: "uint256",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "supportsInterface",
    inputs: [{ name: "interfaceId", type: "bytes4", internalType: "bytes4" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "unlockStake",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "withdrawStake",
    inputs: [
      {
        name: "withdrawAddress",
        type: "address",
        internalType: "address payable",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "withdrawTo",
    inputs: [
      {
        name: "withdrawAddress",
        type: "address",
        internalType: "address payable",
      },
      {
        name: "withdrawAmount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "AccountDeployed",
    inputs: [
      {
        name: "userOpHash",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "sender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "factory",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "paymaster",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "BeforeExecution",
    inputs: [],
    anonymous: false,
  },
  {
    type: "event",
    name: "Deposited",
    inputs: [
      {
        name: "account",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "totalDeposit",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "PostOpRevertReason",
    inputs: [
      {
        name: "userOpHash",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "sender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "nonce",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "revertReason",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "SignatureAggregatorChanged",
    inputs: [
      {
        name: "aggregator",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "StakeLocked",
    inputs: [
      {
        name: "account",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "totalStaked",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "unstakeDelaySec",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "StakeUnlocked",
    inputs: [
      {
        name: "account",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "withdrawTime",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "StakeWithdrawn",
    inputs: [
      {
        name: "account",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "withdrawAddress",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "UserOperationEvent",
    inputs: [
      {
        name: "userOpHash",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "sender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "paymaster",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "nonce",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "success",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
      {
        name: "actualGasCost",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "actualGasUsed",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "UserOperationPrefundTooLow",
    inputs: [
      {
        name: "userOpHash",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "sender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "nonce",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "UserOperationRevertReason",
    inputs: [
      {
        name: "userOpHash",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "sender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "nonce",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "revertReason",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Withdrawn",
    inputs: [
      {
        name: "account",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "withdrawAddress",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "DelegateAndRevert",
    inputs: [
      { name: "success", type: "bool", internalType: "bool" },
      { name: "ret", type: "bytes", internalType: "bytes" },
    ],
  },
  {
    type: "error",
    name: "FailedOp",
    inputs: [
      { name: "opIndex", type: "uint256", internalType: "uint256" },
      { name: "reason", type: "string", internalType: "string" },
    ],
  },
  {
    type: "error",
    name: "FailedOpWithRevert",
    inputs: [
      { name: "opIndex", type: "uint256", internalType: "uint256" },
      { name: "reason", type: "string", internalType: "string" },
      { name: "inner", type: "bytes", internalType: "bytes" },
    ],
  },
  {
    type: "error",
    name: "PostOpReverted",
    inputs: [{ name: "returnData", type: "bytes", internalType: "bytes" }],
  },
  {
    type: "error",
    name: "SenderAddressResult",
    inputs: [{ name: "sender", type: "address", internalType: "address" }],
  },
  {
    type: "error",
    name: "SignatureValidationFailed",
    inputs: [{ name: "aggregator", type: "address", internalType: "address" }],
  },
];

export const EntryPointV07SimulationsBytecode =
  "0x60a060405260405162000012906200009d565b604051809103906000f0801580156200002f573d6000803e3d6000fd5b506001600160a01b0390811660805260408051808201825260008082528251808401909352808352602080840191825282018390529051600380546001600160a01b031916919094161790925551600455516005553480156200009157600080fd5b506001600255620000ab565b61021380620041ba83390190565b6080516140f6620000c4600039600050506140f66000f3fe60806040526004361061012d5760003560e01c806370a08231116100ab578063bb9fe6bf1161006f578063bb9fe6bf1461049e578063c23a5cea146104b3578063c3bce009146104d3578063c5f996e614610500578063dbed18e01461052d578063fc7e286d1461054d57600080fd5b806370a08231146103f5578063765e827f1461042b578063850aaf621461044b5780639b249f691461046b578063b760faf91461048b57600080fd5b8063205c2878116100f2578063205c28781461021057806322cdde4c1461023057806335567e1a146102505780635287ce12146102b05780635895273b146103c857600080fd5b806242dc531461014257806301ffc9a7146101755780630396cb60146101a55780630bd28e3b146101b85780631b2e01b8146101d857600080fd5b3661013d5761013b336105f5565b005b600080fd5b34801561014e57600080fd5b5061016261015d366004613451565b610616565b6040519081526020015b60405180910390f35b34801561018157600080fd5b50610195610190366004613510565b61079f565b604051901515815260200161016c565b61013b6101b336600461353a565b610827565b3480156101c457600080fd5b5061013b6101d3366004613577565b610ab6565b3480156101e457600080fd5b506101626101f3366004613592565b600160209081526000928352604080842090915290825290205481565b34801561021c57600080fd5b5061013b61022b3660046135c7565b610aed565b34801561023c57600080fd5b5061016261024b36600461360c565b610c3e565b34801561025c57600080fd5b5061016261026b366004613592565b6001600160a01b03821660009081526001602090815260408083206001600160c01b038516845290915290819020549082901b67ffffffffffffffff19161792915050565b3480156102bc57600080fd5b5061036d6102cb366004613640565b6040805160a081018252600080825260208201819052918101829052606081018290526080810191909152506001600160a01b031660009081526020818152604091829020825160a0810184528154815260019091015460ff811615159282019290925261010082046001600160701b031692810192909252600160781b810463ffffffff166060830152600160981b900465ffffffffffff16608082015290565b60405161016c9190600060a082019050825182526020830151151560208301526001600160701b03604084015116604083015263ffffffff606084015116606083015265ffffffffffff608084015116608083015292915050565b3480156103d457600080fd5b506103e86103e336600461360c565b610c80565b60405161016c91906136ad565b34801561040157600080fd5b50610162610410366004613640565b6001600160a01b031660009081526020819052604090205490565b34801561043757600080fd5b5061013b610446366004613740565b610d5a565b34801561045757600080fd5b5061013b610466366004613796565b610ed6565b34801561047757600080fd5b5061013b6104863660046137ea565b610f55565b61013b610499366004613640565b6105f5565b3480156104aa57600080fd5b5061013b611000565b3480156104bf57600080fd5b5061013b6104ce366004613640565b611134565b3480156104df57600080fd5b506104f36104ee36600461360c565b611358565b60405161016c919061382b565b34801561050c57600080fd5b5061052061051b3660046138fe565b61151c565b60405161016c919061395f565b34801561053957600080fd5b5061013b610548366004613740565b611605565b34801561055957600080fd5b506105b2610568366004613640565b6000602081905290815260409020805460019091015460ff81169061010081046001600160701b031690600160781b810463ffffffff1690600160981b900465ffffffffffff1685565b6040805195865293151560208601526001600160701b039092169284019290925263ffffffff909116606083015265ffffffffffff16608082015260a00161016c565b60015b6005811015610609576001016105f8565b61061282611a1e565b5050565b6000805a90503330146106705760405162461bcd60e51b815260206004820152601760248201527f4141393220696e7465726e616c2063616c6c206f6e6c7900000000000000000060448201526064015b60405180910390fd5b8451606081015160a082015181016127100160405a603f028161069557610695613990565b0410156106ad5763deaddead60e01b60005260206000fd5b8751600090156107415760006106ca846000015160008c86611a67565b90508061073f5760006106de610800611a7f565b8051909150156107395784600001516001600160a01b03168a602001517f1c4fada7374c0a9ee8841fc38afe82932dc0f8e69012e927f061a8bae611a2018760200151846040516107309291906139a6565b60405180910390a35b60019250505b505b600088608001515a8603019050610791828a8a8a8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250879250611aab915050565b9a9950505050505050505050565b60006001600160e01b0319821663307e35b760e11b14806107d057506001600160e01b0319821663122a0e9b60e31b145b806107eb57506001600160e01b0319821663cf28ef9760e01b145b8061080657506001600160e01b03198216633e84f02160e01b145b8061082157506301ffc9a760e01b6001600160e01b03198316145b92915050565b33600090815260208190526040902063ffffffff82166108895760405162461bcd60e51b815260206004820152601a60248201527f6d757374207370656369667920756e7374616b652064656c61790000000000006044820152606401610667565b600181015463ffffffff600160781b909104811690831610156108ee5760405162461bcd60e51b815260206004820152601c60248201527f63616e6e6f7420646563726561736520756e7374616b652074696d65000000006044820152606401610667565b600181015460009061090f90349061010090046001600160701b03166139d5565b9050600081116109565760405162461bcd60e51b81526020600482015260126024820152711b9bc81cdd185ad9481cdc1958da599a595960721b6044820152606401610667565b6001600160701b0381111561099e5760405162461bcd60e51b815260206004820152600e60248201526d7374616b65206f766572666c6f7760901b6044820152606401610667565b6040805160a08101825283548152600160208083018281526001600160701b0386811685870190815263ffffffff8a811660608801818152600060808a0181815233808352828a52918c90209a518b55965199909801805494519151965165ffffffffffff16600160981b0265ffffffffffff60981b1997909416600160781b029690961669ffffffffffffffffffff60781b1991909516610100026effffffffffffffffffffffffffff0019991515999099166effffffffffffffffffffffffffffff1990941693909317979097179190911691909117179055835185815290810192909252917fa5ae833d0bb1dcd632d98a8b70973e8516812898e19bf27b70071ebc8dc52c01910160405180910390a2505050565b3360009081526001602090815260408083206001600160c01b03851684529091528120805491610ae5836139e8565b919050555050565b3360009081526020819052604090208054821115610b4d5760405162461bcd60e51b815260206004820152601960248201527f576974686472617720616d6f756e7420746f6f206c61726765000000000000006044820152606401610667565b8054610b5a908390613a01565b8155604080516001600160a01b03851681526020810184905233917fd1c19fbcd4551a5edfb66d43d2e337c04837afda3482b42bdf569a8fccdae5fb910160405180910390a26000836001600160a01b03168360405160006040518083038185875af1925050503d8060008114610bed576040519150601f19603f3d011682016040523d82523d6000602084013e610bf2565b606091505b5050905080610c385760405162461bcd60e51b81526020600482015260126024820152716661696c656420746f20776974686472617760701b6044820152606401610667565b50505050565b6000610c4982611c6e565b6040805160208101929092523090820152466060820152608001604051602081830303815290604052805190602001209050919050565b610cbb6040518060c0016040528060008152602001600081526020016000815260200160008152602001600015158152602001606081525090565b610cc3611c87565b610ccb6130d1565b610cd483611cde565b600080610ce360008685611dab565b915091506000610cf560008786611fb1565b90506040518060c001604052808560800151815260200182815260200184815260200183815260200160001515815260200160405180604001604052806002815260200161060f60f31b815250815250945050505050610d556001600255565b919050565b610d62611c87565b816000816001600160401b03811115610d7d57610d7d613256565b604051908082528060200260200182016040528015610db657816020015b610da36130d1565b815260200190600190039081610d9b5790505b50905060005b82811015610e2f576000828281518110610dd857610dd8613a14565b60200260200101519050600080610e13848a8a87818110610dfb57610dfb613a14565b9050602002810190610e0d9190613a2a565b85611dab565b91509150610e24848383600061226d565b505050600101610dbc565b506040516000907fbb47ee3e183a558b1a2ff0874b079f3fc5478b7454eacf2bfc5af2ff5878f972908290a160005b83811015610eb957610ead81888884818110610e7c57610e7c613a14565b9050602002810190610e8e9190613a2a565b858481518110610ea057610ea0613a14565b6020026020010151611fb1565b90910190600101610e5e565b50610ec48482612409565b505050610ed16001600255565b505050565b600080846001600160a01b03168484604051610ef3929190613a4b565b600060405180830381855af49150503d8060008114610f2e576040519150601f19603f3d011682016040523d82523d6000602084013e610f33565b606091505b50915091508181604051632650415560e21b8152600401610667929190613a5b565b6000610f696006546001600160a01b031690565b6001600160a01b031663570e1a3684846040518363ffffffff1660e01b8152600401610f96929190613a9f565b6020604051808303816000875af1158015610fb5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fd99190613ab3565b604051633653dc0360e11b81526001600160a01b0382166004820152909150602401610667565b33600090815260208190526040812060018101549091600160781b90910463ffffffff16900361105f5760405162461bcd60e51b815260206004820152600a6024820152691b9bdd081cdd185ad95960b21b6044820152606401610667565b600181015460ff166110a75760405162461bcd60e51b8152602060048201526011602482015270616c726561647920756e7374616b696e6760781b6044820152606401610667565b60018101546000906110c690600160781b900463ffffffff1642613ad0565b60018301805460ff65ffffffffffff60981b011916600160981b65ffffffffffff841690810260ff19169190911790915560405190815290915033907ffa9b3c14cc825c412c9ed81b3ba365a5b459439403f18829e572ed53a4180f0a906020015b60405180910390a25050565b336000908152602081905260409020600181015461010090046001600160701b03168061119a5760405162461bcd60e51b81526020600482015260146024820152734e6f207374616b6520746f20776974686472617760601b6044820152606401610667565b6001820154600160981b900465ffffffffffff166111fa5760405162461bcd60e51b815260206004820152601d60248201527f6d7573742063616c6c20756e6c6f636b5374616b6528292066697273740000006044820152606401610667565b600182015442600160981b90910465ffffffffffff16111561125e5760405162461bcd60e51b815260206004820152601b60248201527f5374616b65207769746864726177616c206973206e6f742064756500000000006044820152606401610667565b600182018054610100600160c81b0319169055604080516001600160a01b03851681526020810183905233917fb7c918e0e249f999e965cafeb6c664271b3f4317d296461500e71da39f0cbda3910160405180910390a26000836001600160a01b03168260405160006040518083038185875af1925050503d8060008114611302576040519150601f19603f3d011682016040523d82523d6000602084013e611307565b606091505b5050905080610c385760405162461bcd60e51b815260206004820152601860248201527f6661696c656420746f207769746864726177207374616b6500000000000000006044820152606401610667565b611360613169565b6113686130d1565b61137183611cde565b60008061138060008685611dab565b9150915061139260008383600061226d565b60006113a5846000015160e00151612502565b8451519091506000906113b790612502565b90506113d6604051806040016040528060008152602001600081525090565b3660006113e660408b018b613af6565b9092509050600060148210156113fd576000611418565b61140b601460008486613b3c565b61141491613b66565b60601c5b905061142381612502565b9350505050600085905060006040518060a0016040528089608001518152602001896040015181526020018881526020018781526020016114658a6060015190565b90526040805180820182526003546001600160a01b039081168252825180840190935260045483526005546020848101919091528201929092529192508316158015906114bc57506001836001600160a01b031614155b156114e9576040518060400160405280846001600160a01b031681526020016114e485612502565b905290505b6040805160a081018252928352602083019590955293810192909252506060810192909252608082015295945050505050565b604080516060808201835260008083526020830152918101919091526115406130d1565b61154986611cde565b61155560008783611dab565b50600090506060816001600160a01b038816156115e25760005a9050886001600160a01b0316888860405161158b929190613a4b565b6000604051808303816000865af19150503d80600081146115c8576040519150601f19603f3d011682016040523d82523d6000602084013e6115cd565b606091505b5090945092505a6115de9082613a01565b9150505b604080516060810182529182529215156020820152918201529695505050505050565b61160d611c87565b816000805b8281101561177a573686868381811061162d5761162d613a14565b905060200281019061163f9190613b9b565b905036600061164e8380613bb1565b909250905060006116656040850160208601613640565b90506000196001600160a01b038216016116c15760405162461bcd60e51b815260206004820152601760248201527f4141393620696e76616c69642061676772656761746f720000000000000000006044820152606401610667565b6001600160a01b0381161561175e576001600160a01b038116632dd8113384846116ee6040890189613af6565b6040518563ffffffff1660e01b815260040161170d9493929190613d1e565b60006040518083038186803b15801561172557600080fd5b505afa925050508015611736575060015b61175e5760405163086a9f7560e41b81526001600160a01b0382166004820152602401610667565b61176882876139d5565b95505060019093019250611612915050565b506000816001600160401b0381111561179557611795613256565b6040519080825280602002602001820160405280156117ce57816020015b6117bb6130d1565b8152602001906001900390816117b35790505b5090506000805b848110156118ab57368888838181106117f0576117f0613a14565b90506020028101906118029190613b9b565b90503660006118118380613bb1565b909250905060006118286040850160208601613640565b90508160005b8181101561189957600089898151811061184a5761184a613a14565b6020026020010151905060008061186d8b898987818110610dfb57610dfb613a14565b9150915061187d8483838961226d565b8a611887816139e8565b9b50506001909301925061182e915050565b5050600190940193506117d592505050565b506040517fbb47ee3e183a558b1a2ff0874b079f3fc5478b7454eacf2bfc5af2ff5878f97290600090a150600080805b858110156119d957368989838181106118f6576118f6613a14565b90506020028101906119089190613b9b565b905061191a6040820160208301613640565b6001600160a01b03167f575ff3acadd5ab348fe1855e217e0f3678f8d767d7494c9f9fefbee2e17cca4d60405160405180910390a236600061195c8380613bb1565b90925090508060005b818110156119c8576119a78885858481811061198357611983613a14565b90506020028101906119959190613a2a565b8b8b81518110610ea057610ea0613a14565b6119b190886139d5565b9650876119bd816139e8565b985050600101611965565b5050600190930192506118db915050565b506040516000907f575ff3acadd5ab348fe1855e217e0f3678f8d767d7494c9f9fefbee2e17cca4d908290a2611a0f8682612409565b5050505050610ed16001600255565b6000611a2a8234612554565b9050816001600160a01b03167f2da466a7b24304f47e87fa2e1e5a81b9831ce54fec19055ce277ca2f39ba42c48260405161112891815260200190565b6000806000845160208601878987f195945050505050565b60603d82811115611a8d5750815b604051602082018101604052818152816000602083013e9392505050565b6000805a855190915060009081611ac182612587565b60e08301519091506001600160a01b038116611ae05782519350611b9c565b809350600088511115611b9c57868202955060028a6002811115611b0657611b06613d9b565b14611b9c5760a0830151604051637c627b2160e01b81526001600160a01b03831691637c627b2191611b42908e908d908c908990600401613db1565b600060405180830381600088803b158015611b5c57600080fd5b5087f193505050508015611b6e575060015b611b9c576000611b7f610800611a7f565b905080604051632b5e552f60e21b81526004016106679190613dfb565b5a60a0840151606085015160808c015192880399909901980190880380821115611bcf576064600a828403020498909801975b50506040890151878302965086811015611c2b5760028b6002811115611bf757611bf7613d9b565b03611c1a57809650611c088a6125b9565b611c158a6000898b612608565b611c60565b63deadaa5160e01b60005260206000fd5b868103611c388682612554565b506000808d6002811115611c4e57611c4e613d9b565b149050611c5d8c828b8d612608565b50505b505050505050949350505050565b6000611c7982612683565b805190602001209050919050565b6002805403611cd85760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610667565b60028055565b611d516040516135a560f21b60208201526bffffffffffffffffffffffff193060601b166022820152600160f81b603682015260009060370160408051808303601f190181529190528051602090910120600680546001600160a01b0319166001600160a01b0390921691909117905550565b6000611d82611d636040840184613af6565b611d706020860186613640565b611d7d60e0870187613af6565b61273b565b9050805160001461061257600081604051631101335b60e11b81526004016106679291906139a6565b60008060005a8451909150611dc08682612817565b611dc986610c3e565b6020860152604081015161012082015161010083015160a08401516080850151606086015160c0870151861717171717176effffffffffffffffffffffffffffff811115611e595760405162461bcd60e51b815260206004820152601860248201527f41413934206761732076616c756573206f766572666c6f7700000000000000006044820152606401610667565b6000611e888460c081015160a08201516080830151606084015160408501516101009095015194010101010290565b9050611e978a8a8a8487612925565b9650611eab84600001518560200151612abc565b611f015789604051631101335b60e11b8152600401610667918152604060208201819052601a908201527f4141323520696e76616c6964206163636f756e74206e6f6e6365000000000000606082015260800190565b825a86031115611f5d5789604051631101335b60e11b8152600401610667918152604060208201819052601e908201527f41413236206f76657220766572696669636174696f6e4761734c696d69740000606082015260800190565b60e08401516060906001600160a01b031615611f8457611f7f8b8b8b85612b09565b975090505b604089018290528060608a015260a08a01355a870301896080018181525050505050505050935093915050565b6000805a90506000611fc4846060015190565b6040519091506000903682611fdc60608a018a613af6565b9150915060606000826003811115611ff357843591505b506372288ed160e01b6001600160e01b03198216016120a15760008b8b60200151604051602401612025929190613e0e565b60408051601f198184030181529181526020820180516001600160e01b0316638dd7712f60e01b1790525190915030906242dc539061206c9084908f908d90602401613eda565b604051602081830303815290604052915060e01b6020820180516001600160e01b0383818316178352505050509250506120f6565b306001600160a01b03166242dc5385858d8b6040516024016120c69493929190613f1a565b604051602081830303815290604052915060e01b6020820180516001600160e01b03838183161783525050505091505b602060008351602085016000305af195506000519850846040525050505050806122635760003d806020036121315760206000803e60005191505b5063deaddead60e01b81036121845787604051631101335b60e11b8152600401610667918152604060208201819052600f908201526e41413935206f7574206f662067617360881b606082015260800190565b63deadaa5160e01b81036121d557600086608001515a6121a49087613a01565b6121ae91906139d5565b60408801519091506121bf886125b9565b6121cc8860008385612608565b95506122619050565b855180516020808901519201516001600160a01b0390911691907ff62676f440ff169a3a9afdbf812e89e7f95975ee8e5c31214ffdef631c5f47929061221c610800611a7f565b60405161222a9291906139a6565b60405180910390a3600086608001515a6122449087613a01565b61224e91906139d5565b905061225d6002888684611aab565b9550505b505b5050509392505050565b60008061227985612cc7565b91509150816001600160a01b0316836001600160a01b0316146122df5785604051631101335b60e11b81526004016106679181526040602082018190526014908201527320a0991a1039b4b3b730ba3ab9329032b93937b960611b606082015260800190565b80156123375785604051631101335b60e11b81526004016106679181526040602082018190526017908201527f414132322065787069726564206f72206e6f7420647565000000000000000000606082015260800190565b600061234285612cc7565b925090506001600160a01b0381161561239e5786604051631101335b60e11b81526004016106679181526040602082018190526014908201527320a0999a1039b4b3b730ba3ab9329032b93937b960611b606082015260800190565b81156124005786604051631101335b60e11b81526004016106679181526040602082018190526021908201527f41413332207061796d61737465722065787069726564206f72206e6f742064756060820152606560f81b608082015260a00190565b50505050505050565b6001600160a01b03821661245f5760405162461bcd60e51b815260206004820152601860248201527f4141393020696e76616c69642062656e656669636961727900000000000000006044820152606401610667565b6000826001600160a01b03168260405160006040518083038185875af1925050503d80600081146124ac576040519150601f19603f3d011682016040523d82523d6000602084013e6124b1565b606091505b5050905080610ed15760405162461bcd60e51b815260206004820152601f60248201527f41413931206661696c65642073656e6420746f2062656e6566696369617279006044820152606401610667565b604080518082018252600080825260208083018281526001600160a01b03959095168252819052919091206001015461010081046001600160701b03168252600160781b900463ffffffff1690915290565b6001600160a01b03821660009081526020819052604081208054829061257b9085906139d5565b91829055509392505050565b610100810151610120820151600091908082036125a5575092915050565b6125b182488301612d1a565b949350505050565b80518051602080840151928101516040519081526001600160a01b0390921692917f67b4fa9642f42120bf031f3051d1824b0fe25627945b27b8a6a65d5761d5482e910160405180910390a350565b835160e081015181516020808801519301516040516001600160a01b039384169492909316927f49628fd1471006c1482da88028e9ce4dbb080b815c9b0344d39e5a8e6ec1419f916126759189908990899093845291151560208401526040830152606082015260800190565b60405180910390a450505050565b60608135602083013560006126a361269e6040870187613af6565b612d32565b905060006126b761269e6060880188613af6565b9050608086013560a087013560c088013560006126da61269e60e08c018c613af6565b604080516001600160a01b039a909a1660208b015289810198909852606089019690965250608087019390935260a086019190915260c085015260e08401526101008084019190915281518084039091018152610120909201905292915050565b60608415801561275357506001600160a01b0384163b155b15612792575060408051808201909152601981527f41413230206163636f756e74206e6f74206465706c6f79656400000000000000602082015261280e565b601482106127fd5760006127a96014828587613b3c565b6127b291613b66565b60601c9050803b6000036127fb57505060408051808201909152601b81527f41413330207061796d6173746572206e6f74206465706c6f7965640000000000602082015261280e565b505b506040805160208101909152600081525b95945050505050565b6128246020830183613640565b6001600160a01b03168152602082810135908201526001600160801b036080808401358281166060850152811c604084015260a084013560c0808501919091528401359182166101008401521c61012082015236600061288760e0850185613af6565b9092509050801561290a5760348110156128e35760405162461bcd60e51b815260206004820152601d60248201527f4141393320696e76616c6964207061796d6173746572416e64446174610000006044820152606401610667565b6128ed8282612d45565b60a086015260808501526001600160a01b031660e0840152610c38565b600060e084018190526080840181905260a084015250505050565b8251805160009190612944888761293f60408b018b613af6565b612dad565b60e082015160006001600160a01b038216612988576001600160a01b03831660009081526020819052604090205487811161298157808803612984565b60005b9150505b60208801516040516306608bdf60e21b81526001600160a01b038516916319822f7c9189916129be918e91908790600401613f51565b60206040518083038160008887f1935050505080156129fa575060408051601f3d908101601f191682019092526129f791810190613f76565b60015b612a255789612a0a610800611a7f565b6040516365c8fd4d60e01b8152600401610667929190613f8f565b94506001600160a01b038216612aaf576001600160a01b0383166000908152602081905260409020805480891115612aa9578b604051631101335b60e11b81526004016106679181526040602082018190526017908201527f41413231206469646e2774207061792070726566756e64000000000000000000606082015260800190565b88900390555b5050505095945050505050565b6001600160a01b038216600090815260016020908152604080832084821c80855292528220805484916001600160401b038316919085612afb836139e8565b909155501495945050505050565b60606000805a855160e08101516001600160a01b03811660009081526020819052604090208054939450919290919087811015612b92578a604051631101335b60e11b8152600401610667918152604060208201819052601e908201527f41413331207061796d6173746572206465706f73697420746f6f206c6f770000606082015260800190565b8781038260000181905550600084608001519050836001600160a01b03166352b7512c828d8d602001518d6040518563ffffffff1660e01b8152600401612bdb93929190613f51565b60006040518083038160008887f193505050508015612c1c57506040513d6000823e601f3d908101601f19168201604052612c199190810190613fcc565b60015b612c47578b612c2c610800611a7f565b6040516365c8fd4d60e01b815260040161066792919061404c565b9098509650805a87031115612cb8578b604051631101335b60e11b81526004016106679181526040602082018190526027908201527f41413336206f766572207061796d6173746572566572696669636174696f6e47606082015266185cd31a5b5a5d60ca1b608082015260a00190565b50505050505094509492505050565b60008082600003612cdd57506000928392509050565b6000612ce884613060565b9050806040015165ffffffffffff16421180612d0f5750806020015165ffffffffffff1642105b905194909350915050565b6000818310612d295781612d2b565b825b9392505050565b6000604051828085833790209392505050565b60008080612d566014828688613b3c565b612d5f91613b66565b60601c612d70602460148789613b3c565b612d7991614089565b60801c612d8a60346024888a613b3c565b612d9391614089565b9194506001600160801b0316925060801c90509250925092565b8015610c38578251516001600160a01b0381163b15612e185784604051631101335b60e11b8152600401610667918152604060208201819052601f908201527f414131302073656e64657220616c726561647920636f6e737472756374656400606082015260800190565b6000612e2c6006546001600160a01b031690565b6001600160a01b031663570e1a3686600001516040015186866040518463ffffffff1660e01b8152600401612e62929190613a9f565b60206040518083038160008887f1158015612e81573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190612ea69190613ab3565b90506001600160a01b038116612f085785604051631101335b60e11b8152600401610667918152604060208201819052601b908201527f4141313320696e6974436f6465206661696c6564206f72204f4f470000000000606082015260800190565b816001600160a01b0316816001600160a01b031614612f725785604051631101335b60e11b815260040161066791815260406020808301829052908201527f4141313420696e6974436f6465206d7573742072657475726e2073656e646572606082015260800190565b806001600160a01b03163b600003612fd55785604051631101335b60e11b815260040161066791815260406020808301829052908201527f4141313520696e6974436f6465206d757374206372656174652073656e646572606082015260800190565b6000612fe46014828688613b3c565b612fed91613b66565b60601c9050826001600160a01b031686602001517fd51a9c61267aa6196961883ecf5ff2da6619c37dac0fa92122513fb32c032d2d83896000015160e0015160405161304f9291906001600160a01b0392831681529116602082015260400190565b60405180910390a350505050505050565b60408051606081018252600080825260208201819052918101919091528160a081901c65ffffffffffff811660000361309c575065ffffffffffff5b604080516060810182526001600160a01b03909316835260d09490941c602083015265ffffffffffff16928101929092525090565b6040518060a0016040528061314460405180610140016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b8152602001600080191681526020016000815260200160008152602001600081525090565b6040518060a001604052806131a66040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b81526020016131c8604051806040016040528060008152602001600081525090565b81526020016131ea604051806040016040528060008152602001600081525090565b815260200161320c604051806040016040528060008152602001600081525090565b815260200161321961321e565b905290565b604051806040016040528060006001600160a01b03168152602001613219604051806040016040528060008152602001600081525090565b634e487b7160e01b600052604160045260246000fd5b60405160a081016001600160401b038111828210171561328e5761328e613256565b60405290565b60405161014081016001600160401b038111828210171561328e5761328e613256565b604051601f8201601f191681016001600160401b03811182821017156132df576132df613256565b604052919050565b60006001600160401b0382111561330057613300613256565b50601f01601f191660200190565b6001600160a01b038116811461332357600080fd5b50565b8035610d558161330e565b60008183036101c081121561334557600080fd5b61334d61326c565b91506101408082121561335f57600080fd5b613367613294565b915061337284613326565b82526020840135602083015260408401356040830152606084013560608301526080840135608083015260a084013560a083015260c084013560c08301526133bc60e08501613326565b60e0830152610100848101359083015261012080850135908301529082528201356020820152610160820135604082015261018082013560608201526101a0909101356080820152919050565b60008083601f84011261341b57600080fd5b5081356001600160401b0381111561343257600080fd5b60208301915083602082850101111561344a57600080fd5b9250929050565b600080600080610200858703121561346857600080fd5b84356001600160401b038082111561347f57600080fd5b818701915087601f83011261349357600080fd5b81356134a66134a1826132e7565b6132b7565b8181528960208386010111156134bb57600080fd5b8160208501602083013760006020838301015280975050506134e08860208901613331565b94506101e08701359150808211156134f757600080fd5b5061350487828801613409565b95989497509550505050565b60006020828403121561352257600080fd5b81356001600160e01b031981168114612d2b57600080fd5b60006020828403121561354c57600080fd5b813563ffffffff81168114612d2b57600080fd5b80356001600160c01b0381168114610d5557600080fd5b60006020828403121561358957600080fd5b612d2b82613560565b600080604083850312156135a557600080fd5b82356135b08161330e565b91506135be60208401613560565b90509250929050565b600080604083850312156135da57600080fd5b82356135e58161330e565b946020939093013593505050565b6000610120828403121561360657600080fd5b50919050565b60006020828403121561361e57600080fd5b81356001600160401b0381111561363457600080fd5b6125b1848285016135f3565b60006020828403121561365257600080fd5b8135612d2b8161330e565b60005b83811015613678578181015183820152602001613660565b50506000910152565b6000815180845261369981602086016020860161365d565b601f01601f19169290920160200192915050565b60208152815160208201526020820151604082015260408201516060820152606082015160808201526080820151151560a0820152600060a083015160c0808401526125b160e0840182613681565b60008083601f84011261370e57600080fd5b5081356001600160401b0381111561372557600080fd5b6020830191508360208260051b850101111561344a57600080fd5b60008060006040848603121561375557600080fd5b83356001600160401b0381111561376b57600080fd5b613777868287016136fc565b909450925050602084013561378b8161330e565b809150509250925092565b6000806000604084860312156137ab57600080fd5b83356137b68161330e565b925060208401356001600160401b038111156137d157600080fd5b6137dd86828701613409565b9497909650939450505050565b600080602083850312156137fd57600080fd5b82356001600160401b0381111561381357600080fd5b61381f85828601613409565b90969095509350505050565b602080825282516101408383015280516101608401529081015161018083015260408101516101a083015260608101516101c08301526080015160a06101e083015260009061387e610200840182613681565b9050602084015161389c604085018280518252602090810151910152565b506040840151805160808581019190915260209182015160a08601526060860151805160c087015282015160e086015285015180516001600160a01b031661010086015280820151805161012087015290910151610140850152509392505050565b6000806000806060858703121561391457600080fd5b84356001600160401b038082111561392b57600080fd5b613937888389016135f3565b9550602087013591506139498261330e565b909350604086013590808211156134f757600080fd5b6020815281516020820152602082015115156040820152600060408301516060808401526125b16080840182613681565b634e487b7160e01b600052601260045260246000fd5b8281526040602082015260006125b16040830184613681565b634e487b7160e01b600052601160045260246000fd5b80820180821115610821576108216139bf565b6000600182016139fa576139fa6139bf565b5060010190565b81810381811115610821576108216139bf565b634e487b7160e01b600052603260045260246000fd5b6000823561011e19833603018112613a4157600080fd5b9190910192915050565b8183823760009101908152919050565b82151581526040602082015260006125b16040830184613681565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6020815260006125b1602083018486613a76565b600060208284031215613ac557600080fd5b8151612d2b8161330e565b65ffffffffffff818116838216019080821115613aef57613aef6139bf565b5092915050565b6000808335601e19843603018112613b0d57600080fd5b8301803591506001600160401b03821115613b2757600080fd5b60200191503681900382131561344a57600080fd5b60008085851115613b4c57600080fd5b83861115613b5957600080fd5b5050820193919092039150565b6bffffffffffffffffffffffff198135818116916014851015613b935780818660140360031b1b83161692505b505092915050565b60008235605e19833603018112613a4157600080fd5b6000808335601e19843603018112613bc857600080fd5b8301803591506001600160401b03821115613be257600080fd5b6020019150600581901b360382131561344a57600080fd5b6000808335601e19843603018112613c1157600080fd5b83016020810192503590506001600160401b03811115613c3057600080fd5b80360382131561344a57600080fd5b6000610120613c5e84613c5185613326565b6001600160a01b03169052565b60208301356020850152613c756040840184613bfa565b826040870152613c888387018284613a76565b92505050613c996060840184613bfa565b8583036060870152613cac838284613a76565b925050506080830135608085015260a083013560a085015260c083013560c0850152613cdb60e0840184613bfa565b85830360e0870152613cee838284613a76565b92505050610100613d0181850185613bfa565b86840383880152613d13848284613a76565b979650505050505050565b6040808252810184905260006060600586901b830181019083018783805b89811015613d8457868503605f190184528235368c900361011e19018112613d62578283fd5b613d6e868d8301613c3f565b9550506020938401939290920191600101613d3c565b505050508281036020840152613d13818587613a76565b634e487b7160e01b600052602160045260246000fd5b600060038610613dd157634e487b7160e01b600052602160045260246000fd5b85825260806020830152613de86080830186613681565b6040830194909452506060015292915050565b602081526000612d2b6020830184613681565b604081526000613e216040830185613c3f565b90508260208301529392505050565b805180516001600160a01b031683526020810151602084015260408101516040840152606081015160608401526080810151608084015260a081015160a084015260c081015160c084015260e0810151613e9560e08501826001600160a01b03169052565b5061010081810151908401526101209081015190830152602081015161014083015260408101516101608301526060810151610180830152608001516101a090910152565b6000610200808352613eee81840187613681565b9050613efd6020840186613e30565b8281036101e0840152613f108185613681565b9695505050505050565b6000610200808352613f2f8184018789613a76565b9050613f3e6020840186613e30565b8281036101e0840152613d138185613681565b606081526000613f646060830186613c3f565b60208301949094525060400152919050565b600060208284031215613f8857600080fd5b5051919050565b82815260606020820152600d60608201526c10504c8cc81c995d995c9d1959609a1b608082015260a0604082015260006125b160a0830184613681565b60008060408385031215613fdf57600080fd5b82516001600160401b03811115613ff557600080fd5b8301601f8101851361400657600080fd5b80516140146134a1826132e7565b81815286602083850101111561402957600080fd5b61403a82602083016020860161365d565b60209590950151949694955050505050565b82815260606020820152600d60608201526c10504cccc81c995d995c9d1959609a1b608082015260a0604082015260006125b160a0830184613681565b6fffffffffffffffffffffffffffffffff198135818116916010851015613b935760109490940360031b84901b169092169291505056fea2646970667358221220168c07f6e5891a1ab6aac4563142aa92ab4cff00463af4db4a2128e0d6359b3a64736f6c63430008170033608060405234801561001057600080fd5b506101f3806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063570e1a3614610030575b600080fd5b61004361003e3660046100ec565b61005f565b6040516001600160a01b03909116815260200160405180910390f35b60008061006f601482858761015e565b61007891610188565b60601c9050600061008c846014818861015e565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525084519495509360209350849250905082850182875af190506000519350806100e357600093505b50505092915050565b600080602083850312156100ff57600080fd5b823567ffffffffffffffff8082111561011757600080fd5b818501915085601f83011261012b57600080fd5b81358181111561013a57600080fd5b86602082850101111561014c57600080fd5b60209290920196919550909350505050565b6000808585111561016e57600080fd5b8386111561017b57600080fd5b5050820193919092039150565b6bffffffffffffffffffffffff1981358181169160148510156101b55780818660140360031b1b83161692505b50509291505056fea2646970667358221220f92f3369a6dd67c6ea4e93dd9d1531eb5d051f252c2ea8d6c484c66514e542a564736f6c63430008170033";
