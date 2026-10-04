terraform {
  backend "s3" {
    bucket = "asf-backend-tf-root"
    key    = "bancada/dev/terraform.tfstate"
    region = "us-east-1"
  }
}