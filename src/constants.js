export const PROXY_VIDEO_ABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "videoId",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "createdAt",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "size",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "downloadUrl",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "playbackId",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "author",
				"type": "address"
			}
		],
		"name": "VideoUploaded",
		"type": "event"
	},
	{
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"inputs": [],
		"name": "_creator",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractName",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "videoId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "createdAt",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "size",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "downloadUrl",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "playbackId",
				"type": "string"
			}
		],
		"name": "uploadVideo",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "videoCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "videos",
		"outputs": [
			{
				"internalType": "string",
				"name": "videoId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "createdAt",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "size",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "downloadUrl",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "playbackId",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "author",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]
export const DOWNLOAD_BASE_URL = 'https://lp-playback.com/hls';
export const LIVEPEER_API_URL = 'https://livepeer.studio/api/asset';
export const REQUEST_LIVEPEER_UPLOAD_URL = 'https://livepeer.studio/api/asset/request-upload';
export const PEERTUBE_CONTRACT_ADDR = '0x3D3c236EAcffB96769eb8507C041a63425d181Cd';