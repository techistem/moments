import { rest } from "msw";

const baseURL = "https://ci-drf-api-25-46a75cd721fc.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(ctx.json({
      pk:1,
      username:"istem",
      email:"istem.karakas@gmail.com",
      first_name:"",
      last_name:"",
      profile_id:1,
      profile_image:
       "https://res.cloudinary.com/drbyc4bof/image/upload/v1/media/../default_profile_j8veso"
    })
);
}),
rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
return res(ctx.status(200));
}),
];