import {builder} from "@builder.io/sdk";

export default async function getModelUrlPaths(model: string) {
  return await builder.getAll(model, {
    fields: 'data.url',
    options: { noTargeting: true },
  })
}