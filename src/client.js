import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "8ejz2h33", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  apiVersion: "2021-03-25",
});
