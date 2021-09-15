export const state = () => ({
  donors: [
    { name: 'Bartosz Król', emoji: '🤍' },
    { name: 'Hadi', emoji: Math.random() > .5 ? '🍆' : '🍑' },
    { name: 'TacTwo', emoji: '🧙‍♂️' },
    { name: 'Andreas', emoji: '🦦' },
    { name: 'mand', emoji: '🐢' },
    { name: 'papernecklace', emoji: '🍍' },
    { name: 'Asmodeus', emoji: '🖥️' },
    { name: 'ea8dbc5b07', emoji: '🦕' },
    { name: 'SCDerox', emoji: '💻' },
    { name: 'Pri', emoji: '🇮🇳' },
    { name: 'Raeji', emoji: '🗡️' },
    { name: 'EasyThe', emoji: Math.random() > .5 ? '🇧🇬' : '⚡' },
    { name: 'FTNL', emoji: '🐉' },
    { name: 'afex', emoji: '🛡️' },
    { name: 'Zaros', emoji: '😎' },
    { name: 'TheFrodoDE', emoji: '🐍' },
    { name: 'Alex15', emoji: '🤔' },
  ],
  faqs: [
    {
      landing: true,
      title: 'Why does the bot not respond to my messages?',
      answer: `Sounds like a permission issue! By default you should have given the bot all of the permissions it need when you added it to the server. Since the bot doesn't respond though, the channel you're trying to use it in may have overwritten those permissions. In simpler words: <b>try using the bot in a different channel</b>; if a normal user can type there, the bot should be able to do so too. If that doesn't solve it, you only got one option now: Go full out Discord-Admin-Mode. <b>Doublecheck every permission setting you can find</b>, both for the bot's roles and the channel. If you were not the one to set up the permissions in your server, maybe even consider asking them for help. Crazy idea, I know.`
    },
    {
      landing: true,
      title: 'Why do the bots messages look different than on that other Discord server?',
      answer: `The bot has a large variety of customisation options available that change the appearance of the bot's messages. Make sure to check out the available <a href="/themes">Themes</a> and other <a href="/guide">Options</a>!`
    },
    {
      landing: true,
      title: "The bot didn't announce a game that's currently free!",
      answer: `This can have a multitude of reasons. Let's run them through real quick:<br>&bull; We don't know about it yet. Go <a href="/discord" target="_blank">join our Discord Server</a> to let us know!<br>&bull; The game is always free, not 100% off. In that case we will not announce it.<br>&bull; The game got filtered out and didn't reach your server. If you've seen it announced on a different server but your's got left behind, please take a look at our <a href="/guide">filter options</a> and adjust them to your likings!`
    },
    {
      landing: true,
      title: "Why is language ... not supported?",
      answer: `That's because we haven't found a translator for that language yet! If you would like to translate it into your language, <a href="/o/translating" target="_blank">hit us up</a> and get your name on the team page :)`
    },
    {
      landing: false,
      title: "Is it normal for the bot to take a while to announce free games?",
      answer: `Unfortunately yes. Discord only allows the bot to send so many messages at once to prevent spam. That means that some servers get the news earlier than others.`
    },
    {
      landing: false,
      title: "Do you have an API?",
      answer: `We do! You can check it out at <a href="https://docs.freestuffbot.xyz/" target="_blank">docs.freestuffbot.xyz</a>`
    },
    {
      landing: false,
      title: "How can I deactivate/control adult content?",
      answer: `FreeStuff will never distribute adult content, nsfw or otherwise explicit content. This cannot be enabled or disabled, we just straight up don't publish those kinds of games. While it's still possible that games have an age requirement of 18 years, all content visible will be family friendly.`
    },
    {
      landing: true,
      title: "I have a question that's not answered above, where can I ask?",
      answer: `We have a Discord server for exactly that! (and much more) <a href="/discord" target="_blank">Click here to join!</a>`
    }
  ],
  data: {
    flagEmojis: {"us":"🇺🇸","fr":"🇫🇷","it":"🇮🇹","gb":"🇬🇧","golf":"⛳","ger":"🇩🇪","jp":"🇯🇵","ru":"🇷🇺","ko":"🇰🇷","cn":"🇨🇳","flag_ac":"🇦🇨","flag_ad":"🇦🇩","flag_ae":"🇦🇪","flag_af":"🇦🇫","flag_ag":"🇦🇬","flag_ai":"🇦🇮","flag_al":"🇦🇱","flag_am":"🇦🇲","flag_ao":"🇦🇴","flag_aq":"🇦🇶","flag_ar":"🇦🇷","flag_as":"🇦🇸","flag_at":"🇦🇹","flag_au":"🇦🇺","flag_aw":"🇦🇼","flag_ax":"🇦🇽","flag_az":"🇦🇿","flag_ba":"🇧🇦","flag_bb":"🇧🇧","flag_bd":"🇧🇩","flag_be":"🇧🇪","flag_bf":"🇧🇫","flag_bg":"🇧🇬","flag_bh":"🇧🇭","flag_bi":"🇧🇮","flag_bj":"🇧🇯","flag_bl":"🇧🇱","flag_bm":"🇧🇲","flag_bn":"🇧🇳","flag_bo":"🇧🇴","flag_bq":"🇧🇶","flag_br":"🇧🇷","flag_bs":"🇧🇸","flag_bt":"🇧🇹","flag_bv":"🇧🇻","flag_bw":"🇧🇼","flag_by":"🇧🇾","flag_bz":"🇧🇿","flag_ca":"🇨🇦","flag_cc":"🇨🇨","flag_cd":"🇨🇩","flag_cf":"🇨🇫","flag_cg":"🇨🇬","flag_ch":"🇨🇭","flag_ci":"🇨🇮","flag_ck":"🇨🇰","flag_cl":"🇨🇱","flag_cm":"🇨🇲","flag_cn":"🇨🇳","flag_co":"🇨🇴","flag_cp":"🇨🇵","flag_cr":"🇨🇷","flag_cu":"🇨🇺","flag_cv":"🇨🇻","flag_cw":"🇨🇼","flag_cx":"🇨🇽","flag_cy":"🇨🇾","flag_cz":"🇨🇿","flag_de":"🇩🇪","flag_dg":"🇩🇬","flag_dj":"🇩🇯","flag_dk":"🇩🇰","flag_dm":"🇩🇲","flag_do":"🇩🇴","flag_dz":"🇩🇿","flag_ea":"🇪🇦","flag_ec":"🇪🇨","flag_ee":"🇪🇪","flag_eg":"🇪🇬","flag_eh":"🇪🇭","flag_er":"🇪🇷","flag_es":"🇪🇸","flag_et":"🇪🇹","flag_eu":"🇪🇺","flag_fi":"🇫🇮","flag_fj":"🇫🇯","flag_fk":"🇫🇰","flag_fm":"🇫🇲","flag_fo":"🇫🇴","flag_fr":"🇫🇷","flag_ga":"🇬🇦","flag_gb":"🇬🇧","flag_gd":"🇬🇩","flag_ge":"🇬🇪","flag_gf":"🇬🇫","flag_gg":"🇬🇬","flag_gh":"🇬🇭","flag_gi":"🇬🇮","flag_gl":"🇬🇱","flag_gm":"🇬🇲","flag_gn":"🇬🇳","flag_gp":"🇬🇵","flag_gq":"🇬🇶","flag_gr":"🇬🇷","flag_gs":"🇬🇸","flag_gt":"🇬🇹","flag_gu":"🇬🇺","flag_gw":"🇬🇼","flag_gy":"🇬🇾","flag_hk":"🇭🇰","flag_hm":"🇭🇲","flag_hn":"🇭🇳","flag_hr":"🇭🇷","flag_ht":"🇭🇹","flag_hu":"🇭🇺","flag_ic":"🇮🇨","flag_id":"🇮🇩","flag_ie":"🇮🇪","flag_il":"🇮🇱","flag_im":"🇮🇲","flag_in":"🇮🇳","flag_io":"🇮🇴","flag_iq":"🇮🇶","flag_ir":"🇮🇷","flag_is":"🇮🇸","flag_it":"🇮🇹","flag_je":"🇯🇪","flag_jm":"🇯🇲","flag_jo":"🇯🇴","flag_jp":"🇯🇵","flag_ke":"🇰🇪","flag_kg":"🇰🇬","flag_kh":"🇰🇭","flag_ki":"🇰🇮","flag_km":"🇰🇲","flag_kn":"🇰🇳","flag_kp":"🇰🇵","flag_kr":"🇰🇷","flag_kw":"🇰🇼","flag_ky":"🇰🇾","flag_kz":"🇰🇿","flag_la":"🇱🇦","flag_lb":"🇱🇧","flag_lc":"🇱🇨","flag_li":"🇱🇮","flag_lk":"🇱🇰","flag_lr":"🇱🇷","flag_ls":"🇱🇸","flag_lt":"🇱🇹","flag_lu":"🇱🇺","flag_lv":"🇱🇻","flag_ly":"🇱🇾","flag_ma":"🇲🇦","flag_mc":"🇲🇨","flag_md":"🇲🇩","flag_me":"🇲🇪","flag_mf":"🇲🇫","flag_mg":"🇲🇬","flag_mh":"🇲🇭","flag_mk":"🇲🇰","flag_ml":"🇲🇱","flag_mm":"🇲🇲","flag_mn":"🇲🇳","flag_mo":"🇲🇴","flag_mp":"🇲🇵","flag_mq":"🇲🇶","flag_mr":"🇲🇷","flag_ms":"🇲🇸","flag_mt":"🇲🇹","flag_mu":"🇲🇺","flag_mv":"🇲🇻","flag_mw":"🇲🇼","flag_mx":"🇲🇽","flag_my":"🇲🇾","flag_mz":"🇲🇿","flag_na":"🇳🇦","flag_nc":"🇳🇨","flag_ne":"🇳🇪","flag_nf":"🇳🇫","flag_ng":"🇳🇬","flag_ni":"🇳🇮","flag_nl":"🇳🇱","flag_no":"🇳🇴","flag_np":"🇳🇵","flag_nr":"🇳🇷","flag_nu":"🇳🇺","flag_nz":"🇳🇿","flag_om":"🇴🇲","flag_pa":"🇵🇦","flag_pe":"🇵🇪","flag_pf":"🇵🇫","flag_pg":"🇵🇬","flag_ph":"🇵🇭","flag_pk":"🇵🇰","flag_pl":"🇵🇱","flag_pm":"🇵🇲","flag_pn":"🇵🇳","flag_pr":"🇵🇷","flag_ps":"🇵🇸","flag_pt":"🇵🇹","flag_pw":"🇵🇼","flag_py":"🇵🇾","flag_qa":"🇶🇦","flag_re":"🇷🇪","flag_ro":"🇷🇴","flag_rs":"🇷🇸","flag_ru":"🇷🇺","flag_rw":"🇷🇼","flag_sa":"🇸🇦","flag_sb":"🇸🇧","flag_sc":"🇸🇨","flag_sd":"🇸🇩","flag_se":"🇸🇪","flag_sg":"🇸🇬","flag_sh":"🇸🇭","flag_si":"🇸🇮","flag_sj":"🇸🇯","flag_sk":"🇸🇰","flag_sl":"🇸🇱","flag_sm":"🇸🇲","flag_sn":"🇸🇳","flag_so":"🇸🇴","flag_sr":"🇸🇷","flag_ss":"🇸🇸","flag_st":"🇸🇹","flag_sv":"🇸🇻","flag_sx":"🇸🇽","flag_sy":"🇸🇾","flag_sz":"🇸🇿","flag_ta":"🇹🇦","flag_tc":"🇹🇨","flag_td":"🇹🇩","flag_tf":"🇹🇫","flag_tg":"🇹🇬","flag_th":"🇹🇭","flag_tj":"🇹🇯","flag_tk":"🇹🇰","flag_tl":"🇹🇱","flag_tm":"🇹🇲","flag_tn":"🇹🇳","flag_to":"🇹🇴","flag_tr":"🇹🇷","flag_tt":"🇹🇹","flag_tv":"🇹🇻","flag_tw":"🇹🇼","flag_tz":"🇹🇿","flag_ua":"🇺🇦","flag_ug":"🇺🇬","flag_um":"🇺🇲","flag_us":"🇺🇸","flag_uy":"🇺🇾","flag_uz":"🇺🇿","flag_va":"🇻🇦","flag_vc":"🇻🇨","flag_ve":"🇻🇪","flag_vg":"🇻🇬","flag_vi":"🇻🇮","flag_vn":"🇻🇳","flag_vu":"🇻🇺","flag_wf":"🇼🇫","flag_ws":"🇼🇸","flag_xk":"🇽🇰","flag_ye":"🇾🇪","flag_yt":"🇾🇹","flag_za":"🇿🇦","flag_zm":"🇿🇲","flag_zw":"🇿🇼","United_Nations":"🇺🇳","England":"🏴󠁧󠁢󠁥󠁮󠁧󠁿","Scotland":"🏴󠁧󠁢󠁳󠁣󠁴󠁿"}
  }
})
