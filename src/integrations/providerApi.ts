
const endPoint = "http://membersrevamp.warpdemo.co.za/api/ProviderSearch/";

export const SearchProviders = (lat:number, lng:number) => ({
    query: endPoint + 'Get/?searchOptions={"pageLang":"AFR","searchRadius":"5","latitude":"'+lat+'","longitude":"'+lng+'","regionProvince":"Gauteng","regionCode":3,"city":"PRETORIA - GAUTENG","benefitOption":"DP1","disciplineGroupCode":"1","disciplineGroupDescription":"GENERAL PRACTITIONERS","disciplineCode":""}'
});


export default {
    Search: SearchProviders
}


