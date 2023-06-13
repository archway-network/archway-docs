export interface IBCRelayer {
  $schema?: string;
  /**
   * Top level IBC data pertaining to the chain. `chain_1` and `chain_2` should be in alphabetical order.
   */
  chain_1: {
    chain_name: string;
    /**
     * The client ID on the corresponding chain representing the other chain's light client.
     */
    client_id: string;
    /**
     * The connection ID on the corresponding chain representing a connection to the other chain.
     */
    connection_id: string;
  };
  /**
   * Top level IBC data pertaining to the chain. `chain_1` and `chain_2` should be in alphabetical order.
   */
  chain_2: {
    chain_name: string;
    /**
     * The client ID on the corresponding chain representing the other chain's light client.
     */
    client_id: string;
    /**
     * The connection ID on the corresponding chain representing a connection to the other chain.
     */
    connection_id: string;
  };
  channels: {
    chain_1: {
      /**
       * The channel ID on the corresponding chain's connection representing a channel on the other chain.
       */
      channel_id: string;
      /**
       * The IBC port ID which a relevant module binds to on the corresponding chain.
       */
      port_id: string;
    };
    chain_2: {
      /**
       * The channel ID on the corresponding chain's connection representing a channel on the other chain.
       */
      channel_id: string;
      /**
       * The IBC port ID which a relevant module binds to on the corresponding chain.
       */
      port_id: string;
    };
    /**
     * Determines if packets from a sending module must be 'ordered' or 'unordered'.
     */
    ordering: 'ordered' | 'unordered';
    /**
     * IBC Version
     */
    version: string;
    /**
     * Human readable description of the channel.
     */
    description?: string;
    /**
     * Human readable key:value pairs that help describe and distinguish channels.
     */
    tags?: {
      status?: 'live' | 'upcoming' | 'killed';
      preferred?: boolean;
      dex?: string;
      /**
       * String that helps describe non-dex use cases ex: interchain accounts(ICA).
       */
      properties?: string;
      [k: string]: unknown;
    };
  }[];
}
