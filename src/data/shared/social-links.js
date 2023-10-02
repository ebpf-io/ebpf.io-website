import KernelIcon from 'images/social/kernel.inline.svg';
import MeetupIcon from 'images/social/meetup.inline.svg';
import RedditIcon from 'images/social/reddit.inline.svg';
import SlackIcon from 'images/social/slack.inline.svg';
import StackOverflowIcon from 'images/social/stackoverflow.inline.svg';
import TwitterIcon from 'images/social/twitter.inline.svg';

const socialLinks = [
  {
    text: 'Twitter',
    to: 'https://twitter.com/eBPFsummit',
    icon: TwitterIcon,
  },
  {
    text: 'Kernel',
    to: 'https://git.kernel.org/?q=BPF+Group',
    icon: KernelIcon,
  },
  {
    text: 'Slack',
    to: 'https://ebpf.io/slack',
    icon: SlackIcon,
  },
  {
    text: 'Stack Overflow',
    to: 'https://stackoverflow.com/questions/tagged/ebpf+or+bpf+or+xdp-bpf+or+xdp-ebpf+or+bcc-bpf+or+libbpf+or+bpftrace',
    icon: StackOverflowIcon,
  },
  {
    text: 'Reddit',
    to: 'https://www.reddit.com/r/eBPF/',
    icon: RedditIcon,
  },
  {
    text: 'Meetup',
    to: 'https://www.meetup.com',
    icon: MeetupIcon,
  },
];

export default socialLinks;
