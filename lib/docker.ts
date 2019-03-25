import { exec } from 'child_process'
import { Docker, Options } from 'docker-cli-js'

const options = new Options(undefined, __dirname)
const docker = new Docker(options)

export const makeMount = (src, dst) =>
    `--mount type=bind,src=${src},dst=/server/${dst}`

export const command = cmd => docker.command(cmd)

export function isDockerInstalled() {
    return new Promise(resolve => {
        exec('docker', {}, function(error) {
            if (error) {
                resolve(false)
            } else {
                resolve(true)
            }
        })
    })
}
