const helps = {
  ADMIN: [
    { command: 'prefix [New prefix]', description: 'Settings prefix' },
    { command: 'cr', description: 'Check roles to have DJ perms' },
    {
      command: 'cr [Role name or Role ID]',
      description: 'To add custom roles to have DJ perms',
    },
    {
      command: 'cr remove [Role name or Role ID]',
      description: 'To Remove custom roles to have DJ perms',
    },
  ],
  DJ: [
    {
      command: 'atp, autoplay',
      description: 'Automatically play music when the queue runs out',
    },
    { command: 'cl, clear', description: 'Clear Queue' },
    { command: 'filter', description: 'Add filter song' },
    { command: 'fs, fskip, forceskip', description: 'Force skip current song' },
    { command: 'jump', description: 'Jump into song' },
    {
      command: 'lc, leavecleanup',
      description: 'Removes absent user’s songs from the Queue.',
    },
    {
      command: 'loop, repeat',
      description:
        'Loop song or loop queue (0: disbale, 1: Repeat a song, 2: Reapeat queue)',
    },
    { command: 'm, mv, move', description: 'Swap position 2 songs' },
    { command: 'pause, stop', description: 'Pause current song' },
    {
      command: 'resume, replay, continue',
      description: 'Continue play current song',
    },
    { command: 'rm, remove', description: 'Remove a any song' },
    { command: 'rewind, seek', description: 'Rewind current song' },
    { command: 'shuffle', description: 'Shuffle queue' },
    { command: 'vol, volumn', description: 'Set volumn' },
    {
      command: 'pt, ptop, playtop',
      description: 'Add a song to the top of the queue',
    },
    { command: 'speed', description: 'Set speed (from 0+ to 2)' },
  ],
  MEMBER: [
    {
      command: 'help, h, cmd, aliases, commands',
      description: 'Show All commands',
    },
    { command: 'ping', description: 'Check ping' },
    { command: 'join', description: 'Add bot into voice channel' },
    { command: 'p, play', description: 'Play a song or list songs' },
    { command: 'q, queue', description: 'All songs in queue' },
    { command: 'dc, leave, disconect, yamero', description: 'Disconect bot' },
    { command: 'np, nowplay', description: 'Current song playing' },
    {
      command: 'save, grab, yoink, rob, uwu, aww, owo, halu, ray',
      description: 'Save current song',
    },
    {
      command: 'search, find, google, bring [song name]',
      description: 'Search a song',
    },
    { command: 'l, ly, lyrics [song name]', description: 'Get lyrics' },
    {
      command: 's, skip, next, voteskip',
      description: 'Vote skip current song',
    },
  ],
};

document.addEventListener('DOMContentLoaded', () => {
  const socialListEle = document.querySelector('.commands');

  const list = Object.keys(helps)
    .map((k) => {
      const value = helps[k];

      return `

    <h2>${k} permission</h2>
    <ul>
      ${value
        .map((v) => {
          return `<li><span>${v.command}</span><span>${v.description}</span></li>`;
        })
        .join('\n')}
    </ul>
    `;
    })
    .join('\n');

  socialListEle.innerHTML =
    '<h4 class="desc">Using bot with commands with default prefix: !!</h4>' +
    list;
});
