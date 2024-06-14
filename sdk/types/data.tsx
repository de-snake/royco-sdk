export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      actions: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      api_requests: {
        Row: {
          requests: number
          user: string
        }
        Insert: {
          requests?: number
          user: string
        }
        Update: {
          requests?: number
          user?: string
        }
        Relationships: []
      }
      asks_filled_11155420: {
        Row: {
          fill_amount: number
          id: string
          order_id: number
          pool_token: string
          price: number
          taker: string
        }
        Insert: {
          fill_amount: number
          id: string
          order_id: number
          pool_token: string
          price: number
          taker: string
        }
        Update: {
          fill_amount?: number
          id?: string
          order_id?: number
          pool_token?: string
          price?: number
          taker?: string
        }
        Relationships: []
      }
      asks_placed_11155420: {
        Row: {
          expiration: string
          is_valid: boolean
          last_updated: string
          maker: string
          order_id: number
          pool_token: string
          price: number
          quantity: number
        }
        Insert: {
          expiration: string
          is_valid?: boolean
          last_updated: string
          maker: string
          order_id: number
          pool_token: string
          price: number
          quantity: number
        }
        Update: {
          expiration?: string
          is_valid?: boolean
          last_updated?: string
          maker?: string
          order_id?: number
          pool_token?: string
          price?: number
          quantity?: number
        }
        Relationships: []
      }
      bids_filled_11155420: {
        Row: {
          fill_amount: number
          id: string
          order_id: number
          pool_token: string
          price: number
          taker: string
        }
        Insert: {
          fill_amount: number
          id: string
          order_id: number
          pool_token: string
          price: number
          taker: string
        }
        Update: {
          fill_amount?: number
          id?: string
          order_id?: number
          pool_token?: string
          price?: number
          taker?: string
        }
        Relationships: []
      }
      bids_placed_11155420: {
        Row: {
          expiration: string
          is_valid: boolean
          last_updated: string
          maker: string
          order_id: number
          pool_token: string
          price: number
          quantity: number
        }
        Insert: {
          expiration: string
          is_valid?: boolean
          last_updated: string
          maker: string
          order_id: number
          pool_token: string
          price: number
          quantity: number
        }
        Update: {
          expiration?: string
          is_valid?: boolean
          last_updated?: string
          maker?: string
          order_id?: number
          pool_token?: string
          price?: number
          quantity?: number
        }
        Relationships: []
      }
      chains: {
        Row: {
          chain_id: number
          explorer_url: string | null
          id: string
          image: string
          is_supported: boolean
          name: string
          native_token_id: string | null
          symbol: string
          type: string | null
        }
        Insert: {
          chain_id: number
          explorer_url?: string | null
          id: string
          image: string
          is_supported?: boolean
          name: string
          native_token_id?: string | null
          symbol?: string
          type?: string | null
        }
        Update: {
          chain_id?: number
          explorer_url?: string | null
          id?: string
          image?: string
          is_supported?: boolean
          name?: string
          native_token_id?: string | null
          symbol?: string
          type?: string | null
        }
        Relationships: []
      }
      friendtech_base: {
        Row: {
          block_number: number | null
          block_timestamp: number | null
          event_params: string[] | null
          event_signature: string | null
          id: string
          raw_log: string | null
          transaction_hash: string | null
        }
        Insert: {
          block_number?: number | null
          block_timestamp?: number | null
          event_params?: string[] | null
          event_signature?: string | null
          id: string
          raw_log?: string | null
          transaction_hash?: string | null
        }
        Update: {
          block_number?: number | null
          block_timestamp?: number | null
          event_params?: string[] | null
          event_signature?: string | null
          id?: string
          raw_log?: string | null
          transaction_hash?: string | null
        }
        Relationships: []
      }
      invalid_orders_11155420: {
        Row: {
          expiration: string
          maker: string
          order_id: number
          pool_token: string
          price: number
          quantity: number
        }
        Insert: {
          expiration: string
          maker: string
          order_id: number
          pool_token: string
          price: number
          quantity: number
        }
        Update: {
          expiration?: string
          maker?: string
          order_id?: number
          pool_token?: string
          price?: number
          quantity?: number
        }
        Relationships: []
      }
      orders_test: {
        Row: {
          filled: number
          order_id: number
          price: number
          size: number
          status: string
          type: string
        }
        Insert: {
          filled: number
          order_id: number
          price: number
          size: number
          status: string
          type: string
        }
        Update: {
          filled?: number
          order_id?: number
          price?: number
          size?: number
          status?: string
          type?: string
        }
        Relationships: []
      }
      pools: {
        Row: {
          action: string | null
          affiliate_fee: number
          apy: number
          assets: string[]
          chain_id: number
          description: string | null
          filled: number
          id: string
          incentive: string
          incentives: string[]
          is_active: boolean
          name: string | null
          pool_address: string | null
          rewards: number
          timelock: string
          tvl: number
          updated_at: string
        }
        Insert: {
          action?: string | null
          affiliate_fee: number
          apy?: number
          assets: string[]
          chain_id: number
          description?: string | null
          filled?: number
          id: string
          incentive: string
          incentives?: string[]
          is_active?: boolean
          name?: string | null
          pool_address?: string | null
          rewards?: number
          timelock: string
          tvl?: number
          updated_at: string
        }
        Update: {
          action?: string | null
          affiliate_fee?: number
          apy?: number
          assets?: string[]
          chain_id?: number
          description?: string | null
          filled?: number
          id?: string
          incentive?: string
          incentives?: string[]
          is_active?: boolean
          name?: string | null
          pool_address?: string | null
          rewards?: number
          timelock?: string
          tvl?: number
          updated_at?: string
        }
        Relationships: []
      }
      pools_2: {
        Row: {
          affiliate_fee: number | null
          assets: Json | null
          chain_id: number | null
          description: string | null
          id: string
          incentive: string | null
          name: string | null
          pool_address: string | null
          timelock: string | null
          updated_at: string | null
        }
        Insert: {
          affiliate_fee?: number | null
          assets?: Json | null
          chain_id?: number | null
          description?: string | null
          id: string
          incentive?: string | null
          name?: string | null
          pool_address?: string | null
          timelock?: string | null
          updated_at?: string | null
        }
        Update: {
          affiliate_fee?: number | null
          assets?: Json | null
          chain_id?: number | null
          description?: string | null
          id?: string
          incentive?: string | null
          name?: string | null
          pool_address?: string | null
          timelock?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      pools_frontend: {
        Row: {
          action: string
          coordinator_address: number
          description: string
          input_tokens: Json
          name: string
          pool_address: string | null
          timelock: string
          updated_at: string
        }
        Insert: {
          action: string
          coordinator_address?: number
          description: string
          input_tokens: Json
          name: string
          pool_address?: string | null
          timelock: string
          updated_at: string
        }
        Update: {
          action?: string
          coordinator_address?: number
          description?: string
          input_tokens?: Json
          name?: string
          pool_address?: string | null
          timelock?: string
          updated_at?: string
        }
        Relationships: []
      }
      pools_old: {
        Row: {
          affiliate_fee: number | null
          assets: Json[]
          chain_id: number | null
          description: string | null
          id: string
          incentive_address: string | null
          name: string | null
          pool_address: string | null
          timelock: string | null
        }
        Insert: {
          affiliate_fee?: number | null
          assets: Json[]
          chain_id?: number | null
          description?: string | null
          id: string
          incentive_address?: string | null
          name?: string | null
          pool_address?: string | null
          timelock?: string | null
        }
        Update: {
          affiliate_fee?: number | null
          assets?: Json[]
          chain_id?: number | null
          description?: string | null
          id?: string
          incentive_address?: string | null
          name?: string | null
          pool_address?: string | null
          timelock?: string | null
        }
        Relationships: []
      }
      stats: {
        Row: {
          apy: number
          id: string
          rewards: number
          tvl: number
        }
        Insert: {
          apy?: number
          id: string
          rewards?: number
          tvl?: number
        }
        Update: {
          apy?: number
          id?: string
          rewards?: number
          tvl?: number
        }
        Relationships: []
      }
      supported_tokens: {
        Row: {
          id: string
          last_updated: string
          source: string
        }
        Insert: {
          id: string
          last_updated: string
          source: string
        }
        Update: {
          id?: string
          last_updated?: string
          source?: string
        }
        Relationships: []
      }
      test_pools: {
        Row: {
          action: string
          apy: number
          assets: Json
          chain: Json
          created_at: string
          name: string
          pool_address: string
          rewards: Json
          tag: string
          tvl: number
          updated_at: string
        }
        Insert: {
          action: string
          apy: number
          assets: Json
          chain: Json
          created_at: string
          name: string
          pool_address: string
          rewards: Json
          tag: string
          tvl: number
          updated_at: string
        }
        Update: {
          action?: string
          apy?: number
          assets?: Json
          chain?: Json
          created_at?: string
          name?: string
          pool_address?: string
          rewards?: Json
          tag?: string
          tvl?: number
          updated_at?: string
        }
        Relationships: []
      }
      tokens: {
        Row: {
          chain_id: number
          contract_address: string
          current_price: number
          decimals: number
          id: string
          image: string
          last_updated: string
          name: string
          source: string
          symbol: string
          token_id: string
        }
        Insert: {
          chain_id: number
          contract_address: string
          current_price?: number
          decimals: number
          id: string
          image: string
          last_updated?: string
          name: string
          source: string
          symbol: string
          token_id: string
        }
        Update: {
          chain_id?: number
          contract_address?: string
          current_price?: number
          decimals?: number
          id?: string
          image?: string
          last_updated?: string
          name?: string
          source?: string
          symbol?: string
          token_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      base_actions: {
        Row: {
          id: number | null
          name: string | null
        }
        Insert: {
          id?: number | null
          name?: string | null
        }
        Update: {
          id?: number | null
          name?: string | null
        }
        Relationships: []
      }
      base_chains: {
        Row: {
          id: number | null
          image: string | null
          symbol: string | null
        }
        Relationships: []
      }
      base_tokens: {
        Row: {
          ids: string[] | null
          image: string | null
          symbol: string | null
        }
        Relationships: []
      }
      distinct_assets: {
        Row: {
          ids: string[] | null
          image: string | null
          symbol: string | null
        }
        Relationships: []
      }
      distinct_chains: {
        Row: {
          id: number | null
          image: string | null
          symbol: string | null
        }
        Relationships: []
      }
      distinct_incentives: {
        Row: {
          ids: string[] | null
          image: string | null
          symbol: string | null
        }
        Relationships: []
      }
      royco_stats: {
        Row: {
          rewards: number | null
          tvl: number | null
          volume: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      add_token: {
        Args: {
          token: string
        }
        Returns: {
          chain_id: number
          contract_address: string
          current_price: number
          decimals: number
          id: string
          image: string
          last_updated: string
          name: string
          source: string
          symbol: string
          token_id: string
        }[]
      }
      add_tokens: {
        Args: {
          token: string
        }
        Returns: undefined
      }
      update_token_price: {
        Args: Record<PropertyKey, never>
        Returns: {
          token_id: string
          current_price: number
          last_updated: string
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
