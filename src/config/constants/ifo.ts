import tokens from './tokens'
import farms from './farms'
import { Ifo, Token } from './types'

const cakeBnbLpToken: Token = {
  symbol: farms[0].lpSymbol,
  address: farms[0].lpAddresses,
  decimals: 18,
}

const ifos: Ifo[] = [
  {
    id: 'horizon',
    address: '0x6137B571f7F1E44839ae10310a08be86D1A4D03B',
    isActive: true,
    name: 'Horizon Protocol (HZN)',
    poolBasic: {
      saleAmount: '3,000,000 HZN',
      raiseAmount: '$750,000',
      cakeToBurn: '$375,000',
      distributionRatio: 0.3,
    },
    poolUnlimited: {
      saleAmount: '7,000,000 HZN',
      raiseAmount: '$1,750,000',
      cakeToBurn: '$875,000',
      distributionRatio: 0.7,
    },
    currency: cakeBnbLpToken,
    token: tokens.token1,
    releaseBlockNumber: 6581111,
    campaignId: '511090000',
    articleUrl: 'https://pancakeswap.medium.com/horizon-protocol-hzn-ifo-to-be-hosted-on-pancakeswap-51f79601c9d8',
    tokenOfferingPrice: 0.25,
    isV1: false,
  },
  {
    id: 'belt',
    address: '0xc9FBedC033a1c479a6AD451ffE463025E92a1d38',
    isActive: false,
    name: 'Belt (BELT)',
    poolUnlimited: {
      saleAmount: '150,000 BELT',
      raiseAmount: '$3,000,000',
      cakeToBurn: '$1,500,000',
      distributionRatio: 1,
    },
    currency: cakeBnbLpToken,
    token: tokens.token2,
    releaseBlockNumber: 5493919,
    campaignId: '511080000',
    articleUrl: 'https://pancakeswap.medium.com/belt-fi-belt-ifo-to-be-hosted-on-pancakeswap-353585117e32',
    tokenOfferingPrice: null,
    isV1: true,
  },
  {
    id: 'watch',
    address: '0x55344b55C71Ad8834C397E6e08dF5195cF84fe6d',
    isActive: false,
    name: 'Yieldwatch (WATCH)',
    poolUnlimited: {
      saleAmount: '8,000,000 WATCH',
      raiseAmount: '$800,000',
      cakeToBurn: '$400,000',
      distributionRatio: 1,
    },
    currency: cakeBnbLpToken,
    token: tokens.token1,
    releaseBlockNumber: 5294924,
    campaignId: '511070000',
    articleUrl: 'https://pancakeswap.medium.com/yieldwatch-watch-ifo-to-be-hosted-on-pancakeswap-d24301f17241',
    tokenOfferingPrice: null,
    isV1: true,
  },
  {
    id: 'berry',
    address: '0x5d028cE3435B2bB9AceBfaC599EEbA1ccD63d7dd',
    isActive: false,
    name: 'Berry (BRY)',
    poolUnlimited: {
      saleAmount: '2,000,000 BRY',
      raiseAmount: '$1,000,000',
      cakeToBurn: '$500,000',
      distributionRatio: 1,
    },
    currency: cakeBnbLpToken,
    token: tokens.token2,
    releaseBlockNumber: 4750968,
    campaignId: '511060000',
    articleUrl: 'https://pancakeswap.medium.com/berry-bry-ifo-to-be-hosted-on-pancakeswap-b4f9095e9cdb',
    tokenOfferingPrice: null,
    isV1: true,
  },
  {
    id: 'soteria',
    address: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
    isActive: false,
    name: 'Soteria (wSOTE)',
    poolUnlimited: {
      saleAmount: '1,500,000 wSOTE',
      raiseAmount: '$525,000',
      cakeToBurn: '$262,500',
      distributionRatio: 1,
    },
    currency: cakeBnbLpToken,
    token: tokens.token1,
    releaseBlockNumber: 4086064,
    campaignId: '511050000',
    articleUrl: 'https://pancakeswap.medium.com/soteria-sota-ifo-to-be-hosted-on-pancakeswap-64b727c272ae',
    tokenOfferingPrice: null,
    isV1: true,
  },
  {
    id: 'helmet',
    address: '0xa32509d760ee47Eb2Be96D338b5d69B5FBa4eFEB',
    isActive: false,
    name: 'Helmet.insure (Helmet)',
    poolUnlimited: {
      saleAmount: '10,000,000 Helmet',
      raiseAmount: '$1,000,000',
      cakeToBurn: '$500,000',
      distributionRatio: 1,
    },
    currency: cakeBnbLpToken,
    token: tokens.token1,
    releaseBlockNumber: 3771926,
    campaignId: '511040000',
    articleUrl: 'https://pancakeswap.medium.com/1-000-000-helmet-helmet-ifo-to-be-hosted-on-pancakeswap-3379a2a89a67',
    tokenOfferingPrice: null,
    isV1: true,
  },
  {
    id: 'tenet',
    address: '0xB922aA19A2603A07C6C9ED6c236618C9bac51f06',
    isActive: false,
    name: 'Tenet (TEN)',
    poolUnlimited: {
      saleAmount: '1,000,000 TEN',
      raiseAmount: '$1,000,000',
      cakeToBurn: '$500,000',
      distributionRatio: 1,
    },
    currency: cakeBnbLpToken,
    token: tokens.token1,
    releaseBlockNumber: 3483883,
    campaignId: '511030000',
    articleUrl: 'https://pancakeswap.medium.com/tenet-ten-ifo-to-be-hosted-on-pancakeswap-b7e1eb4cb272',
    tokenOfferingPrice: null,
    isV1: true,
  },
  {
    id: 'ditto',
    address: '0x570c9eB19553526Fb35895a531928E19C7D20788',
    isActive: false,
    name: 'Ditto (DITTO)',
    poolUnlimited: {
      saleAmount: '700,000 DITTO',
      raiseAmount: '$630,000',
      cakeToBurn: '$315,000',
      distributionRatio: 1,
    },
    currency: cakeBnbLpToken,
    token: tokens.token1,
    releaseBlockNumber: 3279767,
    campaignId: '511020000',
    articleUrl: 'https://pancakeswap.medium.com/ditto-money-ditto-ifo-to-be-hosted-on-pancakeswap-342da3059a66',
    tokenOfferingPrice: null,
    isV1: true,
  },
  {
    id: 'blink',
    address: '0x44a9Cc8463EC00937242b660BF65B10365d99baD',
    isActive: false,
    name: 'BLINk (BLK)',
    poolUnlimited: {
      saleAmount: '100,000,000 BLINK',
      raiseAmount: '$1,000,000',
      cakeToBurn: '$500,000',
      distributionRatio: 1,
    },
    currency: cakeBnbLpToken,
    token: tokens.token1,
    releaseBlockNumber: 3279767,
    campaignId: '511010000',
    articleUrl: 'https://medium.com/pancakeswap/1-000-000-ifo-blink-joins-pancakeswap-15841800bdd8',
    tokenOfferingPrice: null,
    isV1: true,
  },
]

export default ifos
