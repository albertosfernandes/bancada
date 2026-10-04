module "s3_bucket" {
  source = "terraform-aws-modules/s3-bucket/aws"

  bucket = "bancada-${var.environment}-frontend"
  acl    = "private"

  control_object_lock = true
  object_ownership = "ObjectWriter"

  versioning = {
    enabled = true
  }
}