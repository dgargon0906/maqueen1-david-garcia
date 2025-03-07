basic.showIcon(IconNames.Heart)
basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(1000)
})
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == maqueen.readPatrol(maqueen.Patrol.PatrolRight)) {
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 16)
        maqueen.motorStop(maqueen.Motors.M1)
        basic.pause(500)
    }
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 80)
})
