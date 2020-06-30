const axios = require("axios");

const AIRTABLE_KEY = process.env.AIRTABLE_KEY;

module.exports = async (req, res) => {
  const { code } = req.body;

  const { data } = await axios.get(
    "https://api.airtable.com/v0/appHS7m8ZyNomBG98/users",
    {
      headers: { authorization: `Bearer ${AIRTABLE_KEY}` },
    }
  );

  const results = data.records || [];

  const user = results.find((u) => u.fields.invite_code === code);

  if (user) {
    res.json({ user: user.fields });
  } else {
    res.json({ user: undefined });
  }
};
