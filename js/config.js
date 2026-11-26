// RICKS EXECUTIVE HOSPITALITY GROUP™ — Flagship Runtime Configuration
window.REHG_FLAGSHIP_CONFIG = Object.freeze({
  brandName: "RICKS EXECUTIVE HOSPITALITY GROUP™",
  domain: "https://rehgexec.com",
  repo: "Mricks-REHG/rehg-parent-flagship",
  contactEmail: "mricks@ricksexecutivehospitalitygroup.com",
  contactPhone: "404.594.3765",
  timezone: "America/New_York",
  // Configure endpoint URL below when wiring production webhook receiver
  REHG_20_COMMAND_WEBHOOK_URL: "https://rehgexec.com/api/command-webhook",
  subdomains: {
    portal: "https://portal.rehgexec.com",
    carbon: "https://rehgcarbon.com",
    bar: "https://bar.rehgexec.com",
    kitchen: "https://kitchen.rehgexec.com",
    feeder: "https://feeder.rehgexec.com",
    loss: "https://loss.rehgexec.com"
  },
  thursdaySlotsEst: [
    "Thursday 10:00 AM EST",
    "Thursday 11:30 AM EST",
    "Thursday 2:00 PM EST",
    "Thursday 3:30 PM EST"
  ]
});
