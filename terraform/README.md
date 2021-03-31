# Background
We are using `Terraform` to provision all the required resources for `Cloudflare Workers`.

To be able to use `Terraform` with `Cloudflare` you'll need the details like:
- account email
- account ID
- API token

The email should exported as a environment variable named `CLOUDFLARE_EMAIL`, the account ID as `CLOUDFLARE_ACCOUNT_ID` and the API token should be exported as environment variable named `CLOUDFLARE_API_KEY`.

# Creating all the resources
There are a few resources that we need to be able expose `Cloudflare Workers` via an HTTP endpoint:
- Zone
- Route
- Worker Script

Every resource has it's own properties, so please check the `main.tf` files for details.

To provision everything we should execute:
1. run `terraform init`
2. run `terraform plan -var-file=dev.tfvars -out dev.tfplan`
3. run `terraform apply "dev.tfplan"`
