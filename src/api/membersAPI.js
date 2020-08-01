import axios from "axios";
const url = "https://api.propublica.org/congress/v1";
const token = "Z4qBQxNxqemtefIaPDZVTeTixb06qdrHVtdjozjD";

export const fetchMembers = async () => {
  try {
    const res = await axios.get(`${url}/116/senate/members.json`, {
      headers: { "X-API-Key": token },
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchOneMember = async (id) => {
  try {
    const res = await axios.get(`${url}/members/${id}.json`, {
      headers: { "X-API-Key": token },
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
