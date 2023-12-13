import {builder} from "@builder.io/sdk";

export default async function getModelUrlPaths(model: string) {
  const urls = await builder.getAll(model, {
    fields: 'data.url',
    options: { noTargeting: true },
  })

  return urls.map(pageParam => pageParam?.data?.url).filter(param => param !== "/");
}