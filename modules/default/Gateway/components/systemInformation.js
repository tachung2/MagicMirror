class systemInfo { constructor(e, t) { this.lib = e, this.translate = t, this.System = { VERSION: { MagicMirror: require("../../../../package.json").version, ELECTRON: "unknow", NODEMM: "unknow", NODECORE: "unknow", NPM: "unknow", KERNEL: "unknow", OS: "Loading..." }, HOSTNAME: "unknow", NETWORK: { type: "unknow", ip: "unknow", name: "unknow", speed: "unknow", duplex: "unknow", ssid: "unknow", bitRate: "unknow", frequency: "unknow", txPower: "unknow", powerManagement: "unknow", linkQuality: "unknow", maxLinkQuality: "unknow", signalLevel: "unknow", barLevel: "unknow" }, MEMORY: { total: 0, used: 0, percent: 0, swapTotal: 0, swapUsed: 0, swapPercent: 0 }, STORAGE: [], CPU: { usage: 0, type: "unknow", temp: { C: 0, F: 0 }, speed: "unknow", governor: "unknow" }, UPTIME: { current: 0, currentDHM: "unknow", recordCurrent: 0, recordCurrentDHM: "unknow", MM: 0, MMDHM: "unknow", recordMM: 0, recordMMDHM: "unknow" }, PROCESS: { nginx: { pid: 0, cpu: 0, mem: 0 }, electron: { pid: 0, cpu: 0, mem: 0 }, librespot: { pid: 0, cpu: 0, mem: 0 }, pm2: { pid: 0, cpu: 0, mem: 0 } }, SpeedTest: null } }
    async initData() { this.System.VERSION.NODECORE = await new Promise((e => { this.lib.childProcess.exec("node -v", ((t, s, r) => { if (t) e("unknow");
                else { let t = s.trim();
                    t = t.replace("v", ""), e(t) } })) })), await this.getStaticData(), await this.getUptimeRecord(), setInterval((async() => { await this.uptimed() }), 5e3), console.log("[GATEWAY] [SYSTEMINFO] Initialized") }
    async Get() { return await this.getData(), this.System }
    getStaticData() { var e = { cpu: "manufacturer,brand", osInfo: "distro, release,codename,arch,hostname", system: "raspberry", versions: "kernel, node, npm" }; return new Promise((t => { this.lib.si.get(e).then((e => { e.osInfo && (this.System.VERSION.OS = e.osInfo.distro.split(" ")[0] + " " + e.osInfo.release + " (" + e.osInfo.codename + " " + e.osInfo.arch + ")", this.System.HOSTNAME = e.osInfo.hostname), e.system.raspberry ? this.System.CPU.type = "Raspberry Pi " + e.system.raspberry.type + " (rev " + e.system.raspberry.revision + ")" : this.System.CPU.type = e.cpu.manufacturer + " " + e.cpu.brand, e.versions && (this.System.VERSION.ELECTRON = process.versions.electron, this.System.VERSION.KERNEL = e.versions.kernel, this.System.VERSION.NPM = e.versions.npm, this.System.VERSION.NODEMM = e.versions.node), t() })).catch((e => { console.log("Error", e), t() })) })) }
    getData() { var e = { cpu: "speed,governor", networkInterfaces: "type,ip4,default,iface,speed,duplex", mem: "total,active,swaptotal,swapused", fsSize: "mount,size,used,use", currentLoad: "currentLoad", cpuTemperature: "main", processLoad: "(nginx, electron, librespot, pm2) proc,pid,cpu,mem" }; return new Promise((t => { this.lib.si.get(e).then((async e => { if (this.System.CPU.usage = e.currentLoad.currentLoad.toFixed(0), this.System.CPU.speed = e.cpu.speed + " Ghz", this.System.CPU.governor = e.cpu.governor, e.networkInterfaces && (this.System.NETWORK.type = "unknow", this.System.NETWORK.ip = "unknow", this.System.NETWORK.name = "unknow", this.System.NETWORK.ssid = "unknow", this.System.NETWORK.bitRate = "unknow", this.System.NETWORK.txPower = "unknow", this.System.NETWORK.powerManagement = "unknow", this.System.NETWORK.linkQuality = "unknow", this.System.NETWORK.maxLinkQuality = "unknow", this.System.NETWORK.signalLevel = "unknow", this.System.NETWORK.barLevel = "unknow", this.System.NETWORK.speed = "unknow", this.System.NETWORK.duplex = "unknow", e.networkInterfaces.forEach((e => { e.default && (this.System.NETWORK.type = e.type, this.System.NETWORK.ip = e.ip4, this.System.NETWORK.name = e.iface, this.System.NETWORK.speed = e.speed, this.System.NETWORK.duplex = e.duplex) }))), e.mem && (this.System.MEMORY.total = this.convert(e.mem.total, 0), this.System.MEMORY.used = this.convert(e.mem.active, 2), this.System.MEMORY.percent = (e.mem.active / e.mem.total * 100).toFixed(2), this.System.MEMORY.swapTotal = this.convert(e.mem.swaptotal, 0), this.System.MEMORY.swapUsed = this.convert(e.mem.swapused, 2), this.System.MEMORY.swapPercent = (e.mem.swapused / e.mem.swaptotal * 100).toFixed(2)), e.fsSize && (this.System.STORAGE = [], e.fsSize.forEach((e => { var t = {},
                            s = e.mount;
                        t[s] = { size: this.convert(e.size, 0), used: this.convert(e.used, 2), use: e.use }, t[s].use && this.System.STORAGE.push(t) }))), e.cpuTemperature) { let t = e.cpuTemperature.main,
                        s = 1.8 * t + 32;
                    this.System.CPU.temp.F = s.toFixed(1), this.System.CPU.temp.C = t.toFixed(1) }
                e.processLoad && e.processLoad.forEach((e => { this.System.PROCESS[e.proc] = { pid: e.pid, cpu: +e.cpu.toFixed(2), mem: +e.mem.toFixed(2) } })); let s = await this.takeMesure(this.System.NETWORK.name);
                s && (this.System.NETWORK.type = "wireless", this.System.NETWORK.ssid = s.ssid, this.System.NETWORK.bitRate = s.bitRate, this.System.NETWORK.txPower = s.txPower, this.System.NETWORK.powerManagement = s.powerManagement, this.System.NETWORK.linkQuality = s.linkQuality, this.System.NETWORK.maxLinkQuality = s.maxLinkQuality, this.System.NETWORK.signalLevel = s.signalLevel, this.System.NETWORK.barLevel = s.barLevel, this.System.NETWORK.frequency = s.frequency), t() })).catch((e => { console.error("[GATEWAY] [SYSTEMINFO] Error", e), t() })) })) }
    convert(e, t) { if (!(e = Math.abs(parseInt(e, 10)))) return "0b"; for (var s = [
                [1, "b"],
                [1024, "Kb"],
                [1048576, "Mb"],
                [1073741824, "Gb"],
                [1099511627776, "Tb"]
            ], r = 0; r < s.length; r++)
            if (e < s[r][0]) return (e / s[r - 1][0]).toFixed(t) + s[r - 1][1] }
    getDHM(e) { if (0 == e) return "Loading..."; var t = Math.floor(e / 86400);
        e -= 86400 * t; var s = Math.floor(e / 3600);
        e -= 3600 * s; var r = Math.floor(e / 60); return (t = t > 0 ? t > 1 ? t + " " + this.translate.System_DAYS + " " : t + " " + this.translate.System_DAY + " " : "") + (s = s > 0 ? s > 1 ? s + " " + this.translate.System_HOURS + " " : s + " " + this.translate.System_HOUR + " " : "") + (r > 1 ? r + " " + this.translate.System_MINUTES : r + " " + this.translate.System_MINUTE) }
    uptimed() { return new Promise((e => { this.lib.si.get({ time: "uptime" }).then((async t => { t.time && (this.System.UPTIME.current = t.time.uptime, this.System.UPTIME.currentDHM = this.getDHM(t.time.uptime)), this.System.UPTIME.MM = process.uptime(), this.System.UPTIME.MMDHM = this.getDHM(process.uptime()), (this.System.UPTIME.current > this.System.UPTIME.recordCurrent || this.System.UPTIME.MM > this.System.UPTIME.recordMM) && await this.writeUptimeRecord(), e() })) })) }
    getUptimeRecord() { return new Promise((e => { var t = this.lib.path.resolve(__dirname, "../tools/.uptimed"); if (this.lib.fs.existsSync(t)) this.lib.fs.readFile(t, "utf8", ((t, s) => { if (t) return console.error("[GATEWAY] [SYSTEMINFO] readFile uptimed error!", t), e(); try { s = JSON.parse(s) } catch (t) { return console.error("[GATEWAY] [SYSTEMINFO] readFile data error!", t.toString()), e() }
                console.log("[GATEWAY] [SYSTEMINFO] Read Uptimed"), this.System.UPTIME.recordCurrent = s.system, this.System.UPTIME.recordMM = s.MM, this.System.UPTIME.recordCurrentDHM = this.getDHM(s.system), this.System.UPTIME.recordMMDHM = this.getDHM(s.MM), e() }));
            else { let s = { system: 1, MM: 1 };
                this.lib.fs.writeFile(t, JSON.stringify(s), (t => { t ? console.error("[GATEWAY] [SYSTEMINFO] recordFile creation error!", t) : console.log("[GATEWAY] [SYSTEMINFO] Create Uptimed"), e() })) } })) }
    writeUptimeRecord() { return new Promise((e => { var t = this.lib.path.resolve(__dirname, "../tools/.uptimed");
            this.System.UPTIME.current > this.System.UPTIME.recordCurrent && (this.System.UPTIME.recordCurrent = this.System.UPTIME.current, this.System.UPTIME.recordCurrentDHM = this.getDHM(this.System.UPTIME.recordCurrent)), this.System.UPTIME.MM > this.System.UPTIME.recordMM && (this.System.UPTIME.recordMM = this.System.UPTIME.MM, this.System.UPTIME.recordMMDHM = this.getDHM(this.System.UPTIME.recordMM)); let s = { system: this.System.UPTIME.recordCurrent, MM: this.System.UPTIME.recordMM };
            this.lib.fs.writeFile(t, JSON.stringify(s), (t => { t && console.error("[GATEWAY] [SYSTEMINFO] recordFile writing error!", t), e() })) })) }
    takeMesure(e) { return new Promise((t => { this.lib.childProcess.exec("iwconfig " + e, ((e, s, r) => { if (e) return t(); var i = /ESSID:"(.+)"/.exec(s),
                    n = /Bit Rate=(\d+\.?\d+) +Mb\/s +Tx\-Power=([0-9]+) dBm/.exec(s),
                    o = /Power Management:(.+)\n/.exec(s),
                    a = /Link Quality=([0-9]+)\/([0-9]+) +Signal level=(\-?[0-9]+) dBm/.exec(s),
                    m = /Frequency:(\d+\.?\d+)/.exec(s); let u = { ssid: i[1], frequency: m[1], bitRate: n[1], txPower: n[2], powerManagement: o[1], linkQuality: a[1], maxLinkQuality: a[2], signalLevel: a[3], barLevel: 0 };
                u.signalLevel >= -50 ? u.barLevel = 4 : u.signalLevel < -50 && u.signalLevel >= -60 ? u.barLevel = 3 : u.signalLevel < -60 && u.signalLevel >= -67 ? u.barLevel = 2 : u.signalLevel < -67 && u.signalLevel >= -70 && (u.barLevel = 1), t(u) })) })) } }
module.exports = systemInfo;