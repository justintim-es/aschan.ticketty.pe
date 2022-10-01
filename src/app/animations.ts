import { trigger, transition, style, animate, state } from '@angular/animations';

export const curtainOpenTop = trigger('curtainOpenTop', [
    transition(':leave', [
        style({
            transform: 'translateY(0)',
            position: 'absolute',
            minWidth: '100%'
        }), animate(500, style({
            transform: 'translateY(-100%)',
            position: 'absolute',
            minWidth: '100%'
        }))
    ])
])
export const curtainOpenBottom = trigger('curtainOpenBottom', [
    transition(':leave', [
        style({
            transform: 'translateY(100%)',
            position: 'absolute',
            minWidth: '100%'
        }), animate(500, style({
            transform: 'translateY(200%)',
            position: 'absolute',
            minWidth: '100%'
        }))
    ])
])
export const enterFromLeft = trigger('enterFromLeft', [
    transition(':enter', [
        style({
            transform: 'translateX(-100%)'
        }), animate(500, style({
            transform: 'translateX(0)'
        }))
    ])
])
export const enterFromTop = trigger('enterFromTop', [
    transition(':enter', [
        style({
            transform: 'translateY(-100%)'
        }), animate(500, style({
            transform: 'translateY(0)'
        }))
    ])
])
export const slide = trigger('slide', [
    state('left', style({
        transform: 'translateX(-100%)'
    })),
    state('right', style({
        transform: 'translateX(100%)'
    })),
    state('invision', style({
        transform: 'translateX(0)'
    })),
    state('left-absolute', style({
        transform:'translateX(-100%)',
        position: 'absolute',
        minWidth: '100%'
    })),
    state('invision-absolute', style({
        transform: 'translateX(0)',
        position: 'absolute',
        minWidth: '100%'
    })),
    state('right-absolute', style({
        transform: 'translateX(100%)',
        position: 'absolute',
        minWidth: '100%'
    })),
    transition('left <=> invision', animate(500)),
    transition('right <=> invision', animate(500)),
    transition('invision-absolute => left-absolute', animate(500)),
    transition('invision-absolute => right-absolute', animate(500))
])