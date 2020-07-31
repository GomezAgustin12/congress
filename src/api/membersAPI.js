import axios from "axios";
const url = "https://api.propublica.org/congress/v1";
const token = "Z4qBQxNxqemtefIaPDZVTeTixb06qdrHVtdjozjD";

export const fetchMembers = async () => {
  try {
    const res = await axios.get(`${url}/116/senate/members.json`, {
      headers: { "X-API-Key": token },
    });
    console.log(res);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
