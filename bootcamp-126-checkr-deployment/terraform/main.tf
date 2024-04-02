provider "aws" {
  region = "us-east-1"
}

module "bootcamp" {
    source = "/home/satys/DevOps/terraform/module/eks"
    cluster_name="bc-126"
    cluster_version="1.27"
    cluster_tags= {
        name  = "satyanarayana"
        email = "satyanarayana.senapathi@zemosolabs.com"
    }
    node_group_name="bc_126_node"
    node_group_desired_size=2
    node_group_max_size=2
    node_group_min_size=2
    node_group_instance_types=["t3.medium"]
    node_group_disk_size=20
    acm_cert_arn="arn:aws:acm:us-east-1:365299945243:certificate/6ff9bd88-7486-4c10-b6f7-b0913c132413"
    iam_cluster_policy= "satya-bc126-cluster"
    iam_node_policy= "satya-bc-126-node"
}