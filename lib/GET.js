"use server";

import { cookies } from "next/headers";

export default async function GET({
  link = "/",
  tags = ["getData"],
  revalidate = 3600,
}) {
//   const token = cookies().get("token")?.value;
  const url = `${process.env.BASE_URL}${link}`;

  try {
    const response = await fetch(url, {
      next: { revalidate, tags },
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
      credentials: "same-origin",
    });

    const res = await response.json();

    return {
      message: res?.message,
      status: res?.status,
      statusCode: res?.status_code,
      response: res,
      data: res?.data,
      error: res?.errors,
    };
  } catch (e) {
    return e;
  }
}
