Generate and implement a complete Custom Hook following GSOrder 6-layer React Clean Architecture:

Custom Hook: FetchDongtotProfile
Input: String
Output: String 
Endpoint: "v1/dongtot/profile"
Method: get

Implement all 6 layers by adding code directly to project files:

1. Add Api.FetchDongtotProfile = "v1/dongtot/profile" to GSAPI Config (apiConfig).ts
2. Add FetchDongtotProfileTarget interface / type to GSOrderTargets.ts
3. Add FetchDongtotProfile method to GSOrderAPI Service.ts (interface (TypeScript) + implementation)
4. Add FetchDongtotProfile method to GSOrderAPI Service.ts (interface (TypeScript) + implementation)
5. Add CRFetchDongtotProfileCustom Hook class to GSOrderHook.ts
6. Add executeFetchDongtotProfile method to GSOrderHook / Context.ts (with RxTypeScript bindings + error handling)
