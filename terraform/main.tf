resource "cloudflare_zone" "zone" {
  zone = var.zone_name
}

resource "cloudflare_worker_script" "script" {
  name = var.script_name
  content = file("../script/dist/index.js")
}

resource "cloudflare_worker_route" "route" {
  zone_id = cloudflare_zone.zone.id
  pattern = var.route_pattern
  script_name = cloudflare_worker_script.script.name
}
