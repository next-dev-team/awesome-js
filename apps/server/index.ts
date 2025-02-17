import express, { Request, Response } from "express";


const app = express();
app.use(express.json());

app.get("/callback", (req: Request, res: Response) => {
  const { code, state } = req.query;

  if (code) {
    console.log("Authorization Code:", code);
    console.log("State:", state);

    // Redirect to the Electron app with the authorization code
    res.redirect(`casdoor://callback?code=${code}&state=${state}`);
  } else {
    res.status(400).send("Authorization code not found");
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

