import {
  FETCH_ONE_MEMBER_REQUEST,
  FETCH_ONE_MEMBER_SUCCESS,
  FETCH_ONE_MEMBER_FAILURE,
} from "./detailedTypes";

const initialState = {
  loading: false,
  member: {
    "First Name": "",
    "Middle Name": "",
    "Last Name": "",
    Suffix: "",
    "Date of Birth": "",
    Gender: "",
    url: "",
    "Times Topic urls": "",
    "Times Tag": "",
    govtrack_id: "",
    cspan_id: "",
    "Votesmart ID": "",
    "Twitter Account": "",
    "Facebook Account": "",
    "Youtube Account": "",
    crp_id: "",
    "Google Entity ID": "",
    rss_url: "",
    in_office: true,
    "Current Party": "",
    "Most Recent Vote": "",
    "Last Updated": "",
  },
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ONE_MEMBER_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case FETCH_ONE_MEMBER_SUCCESS:
      return {
        loading: false,
        member: {
          "First Name": action.payload.first_name,
          "Middle Name": action.payload.middle_name,
          "Last Name": action.payload.last_name,
          Suffix: action.payload.suffix,
          "Date of Birth": action.payload.date_of_birth,
          Gender: action.payload.gender,
          url: action.payload.url,
          "Times Topic urls": action.payload.times_topics_url,
          "Times Tag": action.payload.times_tag,
          govtrack_id: action.payload.govtrack_id,
          cspan_id: action.payload.cspan_id,
          "Votesmart ID": action.payload.votesmart_id,
          "Twitter Account": action.payload.twitter_account,
          "Facebook Account": action.payload.facebook_account,
          "Youtube Account": action.payload.youtube_account,
          crp_id: action.payload.crp_id,
          "Google Entity ID": action.payload.google_entity_id,
          rss_url: action.payload.rss_url,
          in_office: action.payload.in_office,
          "Current Party": action.payload.current_party,
          "Most Recent Vote": action.payload.most_recent_vote,
          "Last Updated": action.payload.last_updated,
        },
      };
    case FETCH_ONE_MEMBER_FAILURE:
      return {
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
