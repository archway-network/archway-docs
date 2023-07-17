import { EcosystemPartnerType } from '@/types';

export default class EcosystemPartners {
  static getJSONFileUrls(type: EcosystemPartnerType): string[] {
    return {
      [EcosystemPartnerType.MainnetRelayers]: [
        'https://raw.githubusercontent.com/archway-network/networks/main/_IBC/archway-axelar.json',
        'https://raw.githubusercontent.com/archway-network/networks/main/_IBC/archway-cosmoshub.json',
        'https://raw.githubusercontent.com/archway-network/networks/main/_IBC/archway-osmosis.json',
      ],
      [EcosystemPartnerType.TestnetRelayers]: [
        'https://raw.githubusercontent.com/archway-network/networks/main/_IBC/constantine-3-axelartestnet.json',
        'https://raw.githubusercontent.com/archway-network/networks/main/_IBC/constantine-3-cosmoshubtestnet.json',
        'https://raw.githubusercontent.com/archway-network/networks/main/_IBC/constantine-3-osmosistestnet.json',
      ],
    }[type];
  }
}
