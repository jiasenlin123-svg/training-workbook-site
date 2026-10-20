const RECORD_STATUS={in_progress:'进行中',completed:'已结束',unconfirmed:'旧记录待确认'};
const DATA={"items": [{"id": "e0", "name": "引体向上", "en": "Pull-up", "group": "背部", "cue": "稳住身体，肘向下拉，缓慢落回。", "target": "背阔肌、肘屈肌；提升垂直拉力。", "setup": "选择肩宽或略宽且舒适的正握；拇指环握，双腿微屈或交叠，收紧腹部避免摆动。", "steps": ["从受控悬垂开始，肩胛与手肘协调运动，不必刻意分成先肩胛、后手臂两段。", "肘向身体两侧下方移动，把身体拉高；不靠伸脖子把下巴硬凑过杆。", "在舒适活动范围内下降约2秒，手肘逐渐伸直，允许肩胛自然上转。"], "breath": "上拉时呼气，下降时吸气；保持腹部张力。", "errors": ["摆腿借力 → 减少次数，必要时使用辅助器械。", "缩短回程 → 降低难度，恢复受控且无痛的活动范围。"], "note": "手臂参与正常，酸胀位置不能单独判断背部是否参与。", "motion_caption": "引体向上 · 连续动作 · 12帧/秒 · 来源：Symira Bostic / DVIDS（公有领域）", "continuous": true, "checks": ["身体没有持续前后摆动，最后一次也不靠蹬腿。", "上拉与下降的活动范围大致一致，不用伸脖子补高度。", "最后几次可以变慢，但仍能主动控制下降。"], "regress": "次数不足时，用辅助引体器械降低难度；先保留完整、受控的回程。", "progress": "先让各组在相同标准下稳定完成目标次数，再减少辅助或考虑小幅负重。", "uses": [{"label": "周一 · 上肢力量 A", "sets": "4 × 6–8"}], "rest": "2–3分钟起，未恢复时可延长", "load": "以余力和动作质量判断。若第6次已很勉强、不确定还能标准完成下一次，就不要为了凑8次继续借力；可减少次数、延长休息或增加辅助。"}, {"id": "e1", "name": "胸托划船", "en": "Chest-supported Row", "group": "背部", "cue": "胸贴垫，肘向后，回程不甩。", "target": "背阔肌、上背及肘屈肌；减少躯干借力。", "setup": "哑铃版本将斜凳调到胸部能稳定承托的角度，双脚踩稳，哑铃下垂时不触地；器械版本调好胸垫与座高。两种版本都保持手腕与前臂对齐。", "steps": ["让手肘向后移动，肩胛随拉动自然靠近，胸部始终贴垫。", "拉到上臂与躯干大致齐平或舒适位置，停顿半秒，不强行把肘送得很远。", "控制放回，让肩胛自然前伸；胸廓不塌陷，也不把肩胛全程锁死。"], "breath": "拉时呼气，放回吸气。", "errors": ["抬胸离垫 → 降低重量并重新调整靠垫。", "手腕勾起 → 保持手腕稳定，用肘引导方向。"], "note": "器械与哑铃版本都可，按实际设备调整。", "motion_caption": "胸托划船 · 12帧/秒 · 原创连续示意动画（简化关节轨迹，非真人录像）", "continuous": true, "checks": ["胸部保持接触靠垫，不在拉到顶端时抬起。", "手腕没有勾起，左右手拉动基本同步。", "回程能放慢，重量没有突然掉落。"], "regress": "先减重；器械靠垫应支持胸部且不妨碍呼吸，斜凳哑铃版本也要保证双脚稳定。", "progress": "先增加受控次数，再使用器械或哑铃的最小重量增量。", "uses": [{"label": "周一 · 上肢力量 A", "sets": "3 × 6–8"}], "rest": "1–2分钟起，以动作稳定为准", "load": "用热身逐级确认当天工作重量；按目标次数完成后，通常还应能以同样姿势再做约2–3次。"}, {"id": "e2", "name": "高位下拉", "en": "Lat Pulldown", "group": "背部", "cue": "大腿固定，肘向下，缓慢回放。", "target": "背阔肌与肘屈肌；垂直拉力。", "setup": "压腿垫固定大腿，脚踩地；握距选择舒适位置，躯干仅轻微后倾。", "steps": ["肩胛与手肘协调下拉，杠向上胸靠近；不做颈后下拉。", "保持躯干角度基本不变，到舒适底部停顿，不强拉到胸口。", "控制回程，手臂向上伸展，允许肩胛自然上转，不让配重撞落。"], "breath": "下拉呼气，回程吸气。", "errors": ["大幅后仰甩重量 → 减重，固定躯干角度。", "回程突然松手 → 保持握持并慢慢放回。"], "note": "工作重量以当天热身、动作质量和余力为准，不沿用其他人的历史重量。", "motion_caption": "高位下拉 · 12帧/秒 · 真人连续动作 · Your Move（免费视频授权）", "continuous": true, "checks": ["下拉前后躯干角度基本稳定，不靠大幅后仰。", "回程可受控伸展手臂，配重没有撞落。", "肩肘在舒适范围内协调运动，不强拉杠碰胸。"], "regress": "减轻配重，重新固定大腿；握距先选肩部舒适的位置。", "progress": "先把每组8–10次做稳，再增加最小配重；更重不应换来更大的后仰。", "uses": [{"label": "周一 · 上肢力量 A", "sets": "3 × 8–10"}], "rest": "1–2分钟起，以动作稳定为准", "load": "用热身逐级确认当天工作重量；按目标次数完成后，通常还应能以同样姿势再做约2–3次。"}, {"id": "e3", "name": "上斜哑铃推胸", "en": "Incline Dumbbell Press", "group": "胸部", "cue": "脚踩稳，肘在手下，斜向上推。", "target": "胸肌、三角肌前束和肱三头肌。", "setup": "本手册选用哑铃版本；靠背约15–30°，脚踩稳，肩胛有稳定支撑，哑铃放在胸侧。", "steps": ["手腕大致在肘上方，肘与躯干约30–60°，控制下降。", "下放到肩部舒适且前臂能稳定承重的位置，不强求哑铃低于胸口。", "向上推至手臂接近伸直，哑铃不相撞，肩膀不向前顶。"], "breath": "下降吸气，推起呼气；腹部收紧。", "errors": ["靠背过陡 → 调低角度，减少肩前侧主导。", "为深度牺牲肩稳定 → 缩小幅度并减重。"], "note": "如原日程使用器械上斜推胸，以器械设置为准。", "motion_caption": "上斜哑铃推胸 · 12帧/秒 · 真人连续动作 · Goulart / wger · CC BY-SA 4.0", "continuous": true, "checks": ["左右哑铃轨迹基本同步，手腕没有明显后折。", "下放末端肩部仍有稳定支撑。", "推起时臀部留在凳上，哑铃不相撞。"], "regress": "降低重量或缩小无痛下放幅度；先用轻哑铃熟悉安全起坐和收尾。", "progress": "在相同凳角、握法与幅度下先完成次数上限，再用最小哑铃增量。", "uses": [{"label": "周一 · 上肢力量 A", "sets": "3 × 8–10"}], "rest": "1–2分钟起，以动作稳定为准", "load": "用热身逐级确认当天工作重量；按目标次数完成后，通常还应能以同样姿势再做约2–3次。"}, {"id": "e4", "name": "侧平举", "en": "Lateral Raise", "group": "肩部", "cue": "肘带动，向外上方抬，不甩。", "target": "三角肌中束；肩部外展力量。", "setup": "双脚站稳，肘微屈；手臂在身体两侧略偏前的位置，握持自然，不刻意倒水。", "steps": ["肘引导向两侧抬，手与肘大致同步。", "抬到接近肩高或无痛范围即可，躯干不侧摆。", "用约2秒放下，避免哑铃靠惯性反弹。"], "breath": "抬起呼气，放下吸气。", "errors": ["甩动、蹬腿 → 减重，必要时坐姿完成。", "强行手腕翻下 → 改成自然握姿，不追求倒水动作。"], "note": "肩胛自然运动，避免用“肩膀全程压低”限制它。", "motion_caption": "侧平举 · 12帧/秒 · 真人连续动作 · Your Move（免费视频授权）", "continuous": true, "checks": ["抬起时躯干不侧摆、不用蹬腿。", "肘角大致稳定，不变成屈肘拉起。", "下放能控制，头颈没有跟着前伸。"], "regress": "换轻哑铃，必要时改坐姿；抬举高度按无痛且可控制的范围。", "progress": "先稳定完成12–15次；重量跳档较大时，优先保持动作和回程控制。", "uses": [{"label": "周一 · 上肢力量 A", "sets": "3 × 12–15"}], "rest": "1–2分钟起，以动作稳定为准", "load": "用热身逐级确认当天工作重量；按目标次数完成后，通常还应能以同样姿势再做约2–3次。"}, {"id": "e5", "name": "哑铃弯举", "en": "Dumbbell Curl", "group": "手臂", "cue": "肘位稳定，弯起不摆，落下不掉。", "target": "肱二头肌及其他肘屈肌。", "setup": "站稳，膝微屈，手臂垂在身体两侧，手腕与前臂对齐。", "steps": ["保持上臂大致稳定，屈肘把哑铃举起，手掌可自然转向上。", "在肘部舒适范围内到顶，不用腰后仰帮忙。", "缓慢放下，肘逐渐伸直，不用惯性反弹。"], "breath": "举起呼气，放下吸气。", "errors": ["躯干后仰 → 减重或靠墙站。", "手腕弯折 → 改轻重量或舒适的锤式握法。"], "note": "手腕不适时只选无痛握法与幅度。", "motion_caption": "哑铃弯举 · 12帧/秒 · 真人连续动作 · Matthew Holfinger / DVIDS（公有领域）", "continuous": true, "checks": ["肘部没有随着每次弯举大幅前移。", "腰背不后仰，膝部不反复蹬伸借力。", "手腕与前臂对齐，下降没有突然掉落。"], "regress": "减少重量；可以靠墙减少摆动。锤式握法只在实际无痛时作为可选版本。", "progress": "先增加标准次数；加重量后如果明显摆腰，就回到原重量。", "uses": [{"label": "周一 · 上肢力量 A", "sets": "2 × 10–12"}], "rest": "1–2分钟起，以动作稳定为准", "load": "用热身逐级确认当天工作重量；按目标次数完成后，通常还应能以同样姿势再做约2–3次。"}, {"id": "e6", "name": "杠铃深蹲", "en": "Barbell Back Squat", "group": "腿臀", "cue": "脚踩稳，撑住躯干，髋膝一起下。", "target": "股四头肌、臀肌与躯干稳定。", "setup": "设置安全杆；杠铃放在上背肌肉承托处，不直接压颈部。站距与脚尖外展按髋部舒适度调整，足跟、前脚掌内外侧均有支撑。", "steps": ["吸气并让腹部周围撑紧；髋膝协调屈曲下蹲，重心大致在全脚掌。", "膝盖大致跟随脚尖，允许自然前移；下到能够维持平衡和躯干控制的深度。", "推地站起，让髋与肩一起上升，避免先抬臀再用腰顶。"], "breath": "每次下蹲前吸气建立腹压，保持躯干张力，过困难段后呼气；不要跨多次重复持续憋气。", "errors": ["足跟抬起 → 检查站距、活动度和重量，必要时用举重鞋。", "膝内扣或躯干塌陷 → 减重，重新控制轨迹。"], "note": "使用安全杆或可靠保护，不测试极限重量。膝盖超过脚尖本身不等于错误。", "motion_caption": "杠铃深蹲 · 连续动作 · 12帧/秒 · 来源：Your Move（免费视频授权）", "continuous": true, "checks": ["全脚掌有稳定支撑，足跟不在底部抬起。", "膝盖大致顺着脚尖方向，躯干没有突然塌陷。", "起身时肩与髋协调上升，不先抬臀再顶腰。"], "regress": "减轻重量或暂时减少深度；先用徒手或轻杠确认平衡、安全杆与起身路线。", "progress": "保持相同站位与可控深度；各工作组达到目标且保留余力后，再考虑最小重量增量。", "uses": [{"label": "周二 · 下肢力量 A", "sets": "4 × 4–6"}], "rest": "2–3分钟起，未恢复时可延长", "load": "用热身逐级确认当天工作重量；按目标次数完成后，通常还应能以同样姿势再做约2–3次。"}, {"id": "e7", "name": "罗马尼亚硬拉", "en": "Romanian Deadlift · RDL", "group": "腿臀", "cue": "微屈膝，髋后移，杠贴腿。", "target": "腘绳肌、臀肌；髋铰链能力。", "setup": "从站立持杠开始，脚约髋宽；膝微屈，杠在大腿前，肩部与背部保持张力。", "steps": ["保持膝屈角度大致稳定，臀部向后移，杠沿腿前下降。", "到腿后侧有明显拉伸且背部仍可控制的位置即停，不要求杠碰地。", "脚踩地、髋向前伸展站起；顶部站直即可，不向后折腰。"], "breath": "下降前吸气撑紧躯干，起身过困难段后呼气。", "errors": ["越降越蹲 → 减少膝屈，把髋向后送。", "为触地弯腰 → 提高最低位置，保留后侧张力。"], "note": "训练感受可辅助调整，但不以酸痛作为效果标准。", "motion_caption": "罗马尼亚硬拉 · 连续动作 · 12帧/秒 · 来源：Amber Jennings / DVIDS（公有领域）", "continuous": true, "checks": ["臀部向后移动，膝角基本稳定，不越来越像深蹲。", "杠与腿保持接近，最低点不靠弯腰获得。", "顶部站直即可，不向后折腰。"], "regress": "用轻杠或哑铃练习髋后移；最低点以背部稳定和腿后侧张力为界。", "progress": "先稳定最低位置与回程，再增加次数或重量；不要靠更低触地来证明进步。", "uses": [{"label": "周二 · 下肢力量 A", "sets": "3 × 6–8"}], "rest": "2–3分钟起，未恢复时可延长", "load": "用热身逐级确认当天工作重量；按目标次数完成后，通常还应能以同样姿势再做约2–3次。"}, {"id": "e8", "name": "腿举", "en": "Leg Press", "group": "腿臀", "cue": "骨盆贴垫，控深度，平稳推。", "target": "股四头肌、臀肌。", "setup": "调整座椅，腰背与骨盆有支撑；双脚约肩宽，整只脚踩踏板，熟悉安全锁。", "steps": ["屈髋屈膝缓慢下降，膝盖大致跟随脚尖。", "在骨盆仍贴垫、腰背未明显卷起前停止下降。", "全脚掌推踏板，伸膝到接近伸直，不猛顶或超伸。"], "breath": "下降吸气，推出呼气，腹部保持张力。", "errors": ["底部骨盆卷起 → 减少下降深度或调整座椅。", "用手压膝帮推 → 减重，手握扶手。"], "note": "不同机器行程差别大，以自身稳定范围为准。", "motion_caption": "腿举 · 12帧/秒 · 真人连续动作 · Your Move（免费视频授权）", "continuous": true, "checks": ["骨盆和腰背仍贴垫，底部没有明显卷起。", "双脚保持踏板接触，膝盖不突然内扣。", "推到顶部不猛撞膝关节末端。"], "regress": "减轻配重，调整座椅或减少下降深度；先确认安全锁的开关方法。", "progress": "记录机器、座椅挡位和脚位，在相同设置下比较表现。", "uses": [{"label": "周二 · 下肢力量 A", "sets": "3 × 10"}], "rest": "1–2分钟起，以动作稳定为准", "load": "用热身逐级确认当天工作重量；按目标次数完成后，通常还应能以同样姿势再做约2–3次。"}, {"id": "e9", "name": "腿弯举", "en": "Leg Curl", "group": "腿臀", "cue": "膝轴对齐，髋不抬，慢慢伸回。", "target": "腘绳肌；屈膝力量。", "setup": "选择坐姿或俯卧机；膝关节对准机器转轴，滚垫在脚踝上方，小腿可舒适运动。", "steps": ["躯干与髋部贴靠垫，屈膝带动滚垫。", "到能维持骨盆稳定的位置停顿半秒。", "控制伸膝返回，不让配重砸落，不强顶膝关节末端。"], "breath": "弯起呼气，伸回吸气。", "errors": ["抬髋、塌腰 → 降重并调整压腿垫。", "快速弹回 → 放慢回程，减少重量。"], "note": "疲劳时可以减少辅助组数；具体日期和组次以本档案已确认计划为准。", "motion_caption": "腿弯举（俯卧版本） · 12帧/秒 · 真人连续动作 · Your Move（免费视频授权）", "continuous": true, "checks": ["膝关节与机器轴线对齐，滚垫不压在跟腱上。", "弯起时髋部不抬、腰部不明显代偿。", "伸回末端可以减速，配重不砸落。"], "regress": "先减重、调滚垫和靠垫；坐姿与俯卧版本分别记录设置，不直接比较公斤数。", "progress": "先达到10–12次且髋部稳定，再增加最小配重。", "uses": [{"label": "周二 · 下肢力量 A", "sets": "3 × 10–12"}, {"label": "周六 · 下肢力量 B", "sets": "3 × 10–12"}], "rest": "1–2分钟起，以动作稳定为准", "load": "用热身逐级确认当天工作重量；按目标次数完成后，通常还应能以同样姿势再做约2–3次。"}, {"id": "e10", "name": "死虫式", "en": "Dead Bug", "group": "核心", "cue": "肋骨收住，对侧伸展，腰不拱。", "target": "核心抗伸展与四肢协调。", "setup": "仰卧，髋膝约90°，手向天花板；腰背保持舒适且稳定的贴地关系。", "steps": ["缓慢伸出一侧手臂与对侧腿，先用较小幅度。", "只伸到腰背仍稳定的位置，腿不必贴地，呼气时收住肋骨。", "回到起点，换边；每侧一次算该侧一次。"], "breath": "伸展时缓慢呼气，返回吸气，不屏气硬撑。", "errors": ["伸腿时腰拱起 → 缩短腿的伸展距离或先做脚跟点地。", "动作太快 → 降速，每次伸展约2–3秒。"], "note": "若难以维持控制，减少次数。", "motion_caption": "死虫式 · 12帧/秒 · 原创连续示意动画（简化关节轨迹，非真人录像）", "continuous": true, "checks": ["伸手伸腿时肋骨没有明显翻起。", "腰背与地面的稳定关系没有被伸展破坏。", "左右交替仍能呼吸，回到起点后再换边。"], "regress": "缩短伸展距离，或先做脚跟点地；次数以腰背可稳定控制为上限。", "progress": "先改善伸展范围与控制，再增加次数；不要一次同时增加范围、速度和次数。", "uses": [{"label": "周二 · 下肢力量 A", "sets": "3 × 10 / 侧"}], "rest": "60–90秒起，以恢复控制为准", "load": "先用较容易版本；一旦控制或呼吸明显丢失，就结束该组。"}, {"id": "e11", "name": "杠铃卧推", "en": "Barbell Bench Press", "group": "胸部", "cue": "握牢杠，前臂稳，轻触再推。", "target": "胸肌、肱三头肌、三角肌前束。", "setup": "安全杆或保护者到位；头、上背、臀部有支撑，脚踩地。拇指环握，杠落在掌根上方，手腕尽量与前臂对齐。", "steps": ["取杠后先稳定，下降到中下胸附近，肘与躯干保持舒适角度。", "前臂从正面看接近竖直，杠轻触或到稳定无痛深度，不弹胸。", "向上并略向肩部方向推回，肩胛保持承托，臀部不离凳。"], "breath": "下降前吸气撑紧躯干，推过困难段后呼气。", "errors": ["手腕大幅后折 → 检查杠在掌根的位置并减重。", "弹胸或臀离凳 → 降重，保持身体支撑。"], "note": "当次确认手腕和肩部状态；疼痛时停止该动作，换握法不保证无痛。", "motion_caption": "杠铃卧推 · 12帧/秒 · 真人连续动作 · Your Move（免费视频授权）", "continuous": true, "checks": ["杠在掌根上方，手腕没有明显后折。", "下放轻触或停在稳定深度，不弹胸。", "推起时臀部留在凳上，左右杠端基本同步。"], "regress": "先减重并确认安全杆或保护者；手腕疼痛时停止本动作，再判断是否有无痛替代。", "progress": "在相同触点和幅度下完成4–6次目标并保留余力后，再考虑最小重量增量。", "uses": [{"label": "周四 · 上肢力量 B", "sets": "4 × 4–6"}], "rest": "2–3分钟起，未恢复时可延长", "load": "用热身逐级确认当天工作重量；按目标次数完成后，通常还应能以同样姿势再做约2–3次。"}, {"id": "e12", "name": "中立握哑铃卧推", "en": "Neutral-grip Dumbbell Press", "group": "胸部", "cue": "掌心相对，前臂稳定，平稳推起。", "target": "胸肌、三头肌；卧推的可选替代。", "setup": "平凳上稳住头、背、臀，脚踩地；掌心相对，手腕与前臂对齐。", "steps": ["屈肘下降，肘靠近躯干但不强夹紧，哑铃到胸侧舒适深度。", "保持前臂稳定向上推，不撞哑铃、不耸肩。", "控制返回；结束时先把哑铃稳放到腿上，再坐起。"], "breath": "下降吸气，推起呼气。", "errors": ["认为中立握一定无痛 → 先用轻重量验证，痛则停止。", "结束时直接甩落 → 用可控重量并安排安全收尾。"], "note": "作为胸部推举的一个版本，先用轻重量确认握法、幅度和安全收尾；不直接套用杠铃卧推重量。", "motion_caption": "中立握哑铃卧推 · 12帧/秒 · 真人连续动作 · Goulart / wger · CC BY-SA 4.0", "continuous": true, "checks": ["掌心全程相对，没有边推边变成普通握法。", "手腕在前臂上方，肘部不过度外张。", "左右哑铃同步，结束时仍有能力安全坐起。"], "regress": "从轻重量熟悉版本；减小无痛下放幅度。如果仍疼痛，停止，而不是继续更换握法硬做。", "progress": "独立记录本版本的重量与次数；不要直接沿用杠铃卧推重量或与其比较。", "uses": [{"label": "周四 · 卧推可选替代", "sets": "替代原卧推位置，不额外叠加；先用轻重量重新确认组次"}], "rest": "2–3分钟起，未恢复时可延长", "load": "先用轻哑铃验证握法、幅度和收尾；只有无痛且可控时才安排工作组，不直接套用杠铃卧推重量。"}, {"id": "e13", "name": "坐姿划船", "en": "Seated Cable Row", "group": "背部", "cue": "躯干稳，肘向后，肩胛自然动。", "target": "背阔肌、上背、肘屈肌。", "setup": "双脚固定，膝微屈，躯干直立；拉索高度合适，握把处于舒适位置。", "steps": ["肘向后拉，把握把带向上腹附近；躯干不大幅后仰。", "到肩部舒适位置停顿，避免肘过度向后。", "缓慢放回，允许肩胛前伸，但腰背不塌。"], "breath": "拉起呼气，回放吸气。", "errors": ["躯干前后摇摆 → 减重，缩小借力。", "全程夹死肩胛 → 允许受控前伸与后缩。"], "note": "不把肩胛自然前伸误判为错误。", "motion_caption": "坐姿划船 · 12帧/秒 · 真人连续动作 · Your Move（免费视频授权）", "continuous": true, "checks": ["拉动时躯干角度变化小，不反复前后甩。", "回放可让肩胛自然前伸，但腰背不塌。", "握把靠近上腹的过程中，手腕保持稳定。"], "regress": "减轻配重，先缩小躯干借力；调整握把和脚部位置。", "progress": "在相同握把、座位和活动范围下先增加次数，再提高配重。", "uses": [{"label": "周四 · 上肢力量 B", "sets": "3 × 8–10"}], "rest": "1–2分钟起，以动作稳定为准", "load": "用热身逐级确认当天工作重量；按目标次数完成后，通常还应能以同样姿势再做约2–3次。"}, {"id": "e14", "name": "坐姿哑铃肩推", "en": "Seated Dumbbell Shoulder Press", "group": "肩部", "cue": "肋骨收住，前臂竖直，向上推。", "target": "三角肌与肱三头肌。", "setup": "靠背近直立，双脚踩稳；哑铃在肩侧，肘略在身体前方，手腕对齐前臂。", "steps": ["向上推起，肩胛可自然上转，手臂不必强行贴耳。", "接近伸直时保持肋骨不翻起，腰部不过度后仰。", "控制下降到可稳定且无痛的位置。"], "breath": "下降吸气，推起呼气。", "errors": ["靠塌腰顶重量 → 减重，调整靠背与核心张力。", "锁死肩胛下沉 → 让肩胛随上举自然运动。"], "note": "这里明确采用哑铃坐姿版本；如原训练使用杠铃，需按对应版本调整。", "motion_caption": "坐姿哑铃肩推 · 12帧/秒 · 真人连续动作 · Goulart / wger · CC BY-SA 4.0", "continuous": true, "checks": ["背部有靠垫支撑，推起时肋骨没有明显翻起。", "手腕在肘上方，左右哑铃轨迹基本同步。", "肩胛随上举自然运动，不强行压肩。"], "regress": "减轻重量，调整靠背和无痛下放范围；无法稳定完成时结束该组。", "progress": "先把每组8次做稳；不能靠增大腰部后仰完成新重量。", "uses": [{"label": "周四 · 上肢力量 B", "sets": "3 × 8"}], "rest": "1–2分钟起，以动作稳定为准", "load": "用热身逐级确认当天工作重量；按目标次数完成后，通常还应能以同样姿势再做约2–3次。"}, {"id": "e15", "name": "反向飞鸟", "en": "Reverse Fly", "group": "肩部", "cue": "胸有支撑，肘向外，别甩。", "target": "三角肌后束及上背。", "setup": "本手册采用胸托哑铃版本；胸贴斜凳，肘微屈，双脚踩稳。", "steps": ["手臂向两侧打开，保持肘角基本不变。", "抬到上臂大致与躯干齐平或舒适高度，不过度夹背。", "控制回程，头颈与躯干自然对齐。"], "breath": "打开呼气，回程吸气。", "errors": ["变成屈肘划船 → 降重并保持肘角。", "抬头甩动 → 保持胸贴垫、颈部中立。"], "note": "器械版本可按相同控制原则执行。", "motion_caption": "反向飞鸟 · 12帧/秒 · 原创连续示意动画（简化关节轨迹，非真人录像）", "continuous": true, "checks": ["胸贴斜凳，头颈与躯干自然对齐。", "肘角大致固定，打开动作不变成屈肘划船。", "回程能减速，哑铃不自由甩落。"], "regress": "使用更轻哑铃；保持胸部支撑，缩小到能控制的活动范围。", "progress": "先稳定完成12–15次；后束动作通常不适合用大幅摆动追求更重。", "uses": [{"label": "周四 · 上肢力量 B", "sets": "3 × 12–15"}], "rest": "1–2分钟起，以动作稳定为准", "load": "用热身逐级确认当天工作重量；按目标次数完成后，通常还应能以同样姿势再做约2–3次。"}, {"id": "e16", "name": "绳索下压", "en": "Rope Triceps Pushdown", "group": "手臂", "cue": "上臂稳，只伸肘，慢回程。", "target": "肱三头肌。", "setup": "拉索调高，身体站稳并略前倾；上臂在身体侧面，肩部自然。", "steps": ["伸肘向下压，绳索末端可自然分开，不靠压肩与躯干下沉。", "手肘接近伸直即可，不突然撞到末端。", "控制回程到舒适屈肘角度，上臂不明显前后摆。"], "breath": "下压呼气，回程吸气。", "errors": ["身体压绳 → 减重，保持上臂稳定。", "手腕弯折 → 握持自然，前臂与手腕对齐。"], "note": "绳索分开幅度不必刻意夸大。", "motion_caption": "绳索下压 · 12帧/秒 · 真人连续动作 · Your Move（免费素材授权）", "continuous": true, "checks": ["上臂大致固定在身体两侧，不前后甩。", "下压主要来自伸肘，身体不跟着下沉。", "回程能控制，手腕没有折起。"], "regress": "减少配重，站在绳索不碰躯干的位置；先确认肩部和上臂可以稳定。", "progress": "先做稳10–12次，再增加最小配重；绳尾分开幅度不作为加重标准。", "uses": [{"label": "周四 · 上肢力量 B", "sets": "2 × 10–12"}], "rest": "1–2分钟起，以动作稳定为准", "load": "用热身逐级确认当天工作重量；按目标次数完成后，通常还应能以同样姿势再做约2–3次。"}, {"id": "e17", "name": "传统硬拉", "en": "Conventional Deadlift", "group": "腿臀", "cue": "杠在中足，先绷紧，再推地。", "target": "臀肌、腿部与背部稳定；整体拉力。", "setup": "杠在中足上方，脚约髋宽，手在腿外环握。屈髋屈膝抓杠，小腿接近杠，髋高度按身体比例调整。", "steps": ["吸气撑紧腹部，收紧背部与杠的松弛量，不突然猛拽。", "推地站起，杠贴近腿，髋与肩协调上升。", "顶部髋膝伸直即可，不后仰；髋先向后送，杠过膝后再屈膝放回。"], "breath": "每次起拉前重新建立腹压，落地后重置，不连续憋气做多次。", "errors": ["杠离身、髋抢先抬 → 降重，重置起始位置。", "顶部后仰 → 站直即停，避免用腰补锁定。"], "note": "本手册指传统硬拉，其他版本不要混用起始姿势。", "motion_caption": "传统硬拉 · 12帧/秒 · 真人连续动作 · Your Move（免费视频授权）", "continuous": true, "checks": ["起拉前已绷紧，杠没有被突然猛拽。", "杠贴近腿，起身时肩与髋协调移动。", "每次落地可重新设置，不靠反弹连续拉起。"], "regress": "减少重量，逐次重置；如果地面起始位置无法稳定控制，先用轻重量并寻求现场技术指导。", "progress": "保持每次起拉设置一致；完成目标且动作稳定后再小幅加重，不以一次勉强拉起为依据。", "uses": [{"label": "周六 · 下肢力量 B", "sets": "3 × 4–5"}], "rest": "2–3分钟起，未恢复时可延长", "load": "用热身逐级确认当天工作重量；按目标次数完成后，通常还应能以同样姿势再做约2–3次。"}, {"id": "e18", "name": "哈克深蹲", "en": "Hack Squat", "group": "腿臀", "cue": "背贴垫，脚踩稳，控深度。", "target": "股四头肌与臀肌。", "setup": "肩背贴靠垫，双脚全掌在踏板上，调好站位并确认安全挡位。", "steps": ["解锁后缓慢屈膝屈髋，膝随脚尖方向移动。", "下到足跟稳定、骨盆与背仍有支撑的位置。", "推地起身，不借底部反弹，末端不超伸膝。"], "breath": "下降吸气，起身呼气并保持腹部张力。", "errors": ["追深度导致骨盆离垫 → 缩小幅度或调整脚位。", "末端猛锁膝 → 平稳伸直，不冲撞。"], "note": "不同机器角度不同，不套用固定脚位。", "motion_caption": "哈克深蹲 · 12帧/秒 · 原创连续示意动画（简化关节轨迹，非真人录像）", "continuous": true, "checks": ["肩背与骨盆有靠垫支撑。", "足跟保持踏板接触，膝盖跟随脚尖。", "底部不反弹，顶部不突然猛锁膝。"], "regress": "减轻配重并调整脚位；确认安全挡位，深度以背部支撑和全脚掌稳定为限。", "progress": "记录具体机器和脚位，在相同设置下比较次数与重量。", "uses": [{"label": "周六 · 下肢力量 B", "sets": "3 × 8"}], "rest": "1–2分钟起，以动作稳定为准", "load": "用热身逐级确认当天工作重量；按目标次数完成后，通常还应能以同样姿势再做约2–3次。"}, {"id": "e19", "name": "臀推", "en": "Hip Thrust", "group": "腿臀", "cue": "肋骨收住，髋伸直，别折腰。", "target": "臀大肌；髋伸展力量。", "setup": "上背承托在稳定凳边，杠垫放在髋部，双脚踩稳；顶部小腿大致竖直，可按感受调整脚位。", "steps": ["收住肋骨，脚推地把髋抬起。", "顶部躯干与大腿大致连线，轻收骨盆，臀部收紧半秒。", "缓慢下放到可控制的位置，上背不滑落。"], "breath": "抬髋呼气，下放吸气。", "errors": ["顶部抬胸塌腰 → 减重，收肋骨并缩小高度。", "脚位导致仅腿后侧抽紧 → 调整脚距，不以抽筋作为有效刺激。"], "note": "凳子必须稳定，髋部用足够厚的护垫。", "motion_caption": "臀推 · 12帧/秒 · 真人连续动作 · Goulart / wger · CC BY-SA 4.0", "continuous": true, "checks": ["上背留在稳定凳边，没有滑落。", "顶部来自伸髋，肋骨不翻起、腰不折。", "双脚保持支撑，左右骨盆不明显偏斜。"], "regress": "先用徒手臀桥或轻重量臀推熟悉伸髋；再调整脚距和凳高。", "progress": "先把顶部控制和8–10次做稳，再小幅加重；不靠抬胸后仰增加高度。", "uses": [{"label": "周六 · 下肢力量 B", "sets": "3 × 8–10"}], "rest": "1–2分钟起，以动作稳定为准", "load": "用热身逐级确认当天工作重量；按目标次数完成后，通常还应能以同样姿势再做约2–3次。"}, {"id": "e20", "name": "悬垂举腿", "en": "Hanging Leg Raise", "group": "核心", "cue": "先稳悬垂，再卷骨盆，不摆腿。", "target": "腹肌与髋屈肌；控制骨盆。", "setup": "牢固握杆，肩部在舒适受控悬垂位置；先停止身体摆动。", "steps": ["先用屈膝版本，呼气时把膝向胸部带，同时轻轻向后卷骨盆。", "只举到能控制腰背与摆动的高度，不追求脚碰杆。", "慢慢放下，停稳后再做下一次。"], "breath": "上举呼气，下降吸气，不屏气。", "errors": ["只甩腿不控制骨盆 → 改屈膝、减小幅度。", "握力或肩部先不适 → 改仰卧反向卷腹或死虫式。"], "note": "直腿更难，不必强求。次数以能保持控制为上限。", "motion_caption": "悬垂举腿（屈膝版本） · 12帧/秒 · 真人连续动作 · Matthew Holfinger / DVIDS（公有领域）", "continuous": true, "checks": ["开始每次重复前，身体已基本停稳。", "膝向上带的同时能轻卷骨盆，不只甩腿。", "下降可以减速，握力和肩部仍有控制。"], "regress": "优先屈膝或缩小范围；悬垂无法稳定时，可改死虫式练习核心控制。", "progress": "先做稳屈膝版本，再逐渐增加伸腿程度；直腿是更高难度，不是必须完成的标准。", "uses": [{"label": "周六 · 下肢力量 B", "sets": "3 × 10–12"}], "rest": "60–90秒起，以恢复控制为准", "load": "先用较容易版本；一旦控制或呼吸明显丢失，就结束该组。"}, {"id": "e21", "name": "平板支撑", "en": "Forearm Plank", "group": "核心", "cue": "肋骨收住，臀收紧，持续呼吸。", "target": "核心抗伸展；补充动作。", "setup": "前臂撑地，肘在肩下，脚向后伸，头到脚大致连线。", "steps": ["轻收骨盆与臀部，腹部保持张力。", "保持肩部有支撑，头颈自然，不抬头。", "能够稳定呼吸且姿势不变时保持，塌腰前结束。"], "breath": "持续平稳呼吸，不憋气计时。", "errors": ["靠塌腰坚持 → 缩短时长或改膝支撑。", "臀抬得过高 → 调整到躯干直线，减少难度。"], "note": "补充查阅，不自动加入现有四日计划。建议先以20–40秒的可控时长练习。", "motion_caption": "平板支撑 · 静态保持姿势示意", "checks": ["头、躯干与腿大致连线，不塌腰。", "前臂稳定撑地，臀部不过度抬高。", "保持期间能够持续呼吸，姿势不随时间崩溃。"], "regress": "缩短保持时间或改膝支撑；在姿势开始改变前结束。", "progress": "先增加稳定保持时间，再考虑更难版本；不为了计时硬撑。", "uses": [{"label": "补充查阅", "sets": "20–40秒的可控保持；未加入四日计划"}], "rest": "60–90秒起，以恢复控制为准", "load": "先用较容易版本；一旦控制或呼吸明显丢失，就结束该组。"}, {"id": "e22", "name": "锤式弯举", "en": "Hammer Curl", "group": "手臂", "cue": "掌心相对，肘位稳定，回程慢放。", "target": "肱肌、肱桡肌与肱二头肌；提供中立握肘屈版本。", "setup": "站稳，膝微屈，哑铃放身体两侧；掌心相对，手腕和前臂保持对齐。", "steps": ["上臂大致留在身体两侧，同时屈肘举起哑铃。", "到达可控位置即可，不用肩部前送或腰部后仰补高度。", "受控放回，手臂逐渐伸直，掌心始终相对。"], "breath": "举起呼气，下降吸气。", "errors": ["腰部后仰 → 减重，保持躯干稳定。", "手腕折起 → 保持中立位置，换轻重量。"], "note": "可作为哑铃弯举的备选，不额外叠加；中立握不等于能绕过疼痛。", "checks": ["掌心始终相对。", "最后一次仍不摆腰。", "两侧下放均能控制。"], "regress": "减轻哑铃，必要时靠墙限制躯干摆动。", "progress": "先稳定次数和幅度，再考虑最小哑铃增量。", "uses": [{"label": "哑铃弯举的可选替代", "sets": "尚未编入当前四日计划；选择后替换或单独安排，不自动加组"}], "rest": "1–2分钟起，以呼吸与动作控制恢复为准", "load": "先用轻重量确认动作版本。若选入计划，再确定工作组与目标次数；不直接套用其他版本重量。", "motion_caption": "锤式弯举 · 12帧/秒 · 真人连续动作 · Your Move（免费素材授权）", "continuous": true, "equipment": "哑铃", "pattern": "备选", "replace_candidate": 5}, {"id": "e23", "name": "单臂哑铃划船（手撑大腿）", "en": "Single-arm Dumbbell Row — Thigh-supported", "group": "背部", "cue": "撑稳躯干，肘向后拉，回程不转腰。", "target": "背部水平拉力与单侧控制。", "setup": "前后错步并稍加宽站距，屈髋前倾，空手撑在前侧大腿上；另一手握哑铃自然下垂。", "steps": ["先稳定躯干与骨盆，哑铃在肩下方悬垂。", "将肘向后带，哑铃靠近身体侧面，不靠大幅转体提起。", "受控放回手臂下垂位置；完成一侧后重新站稳再换侧。"], "breath": "拉起呼气，放回吸气；保持躯干张力。", "errors": ["转腰甩起 → 减重，保持肩髋朝向稳定。", "抬头顶腰 → 颈部随躯干保持自然位置。"], "note": "本示范是手撑大腿版本，不是胸托划船；腰背控制不足时不能把它当作等效低负担替代。", "checks": ["躯干角度基本稳定。", "骨盆不随拉动明显旋转。", "两侧使用相同可控范围。"], "regress": "用更轻哑铃、较小但受控的幅度；不能稳定躯干时暂不选本版本。", "progress": "先让两侧完成同样质量与次数，再提高重量。", "uses": [{"label": "水平拉力的另一版本（需单独确认）", "sets": "尚未编入当前四日计划；选择后替换或单独安排，不自动加组"}], "rest": "1–2分钟起，以呼吸与动作控制恢复为准", "load": "先用轻重量确认动作版本。若选入计划，再确定工作组与目标次数；不直接套用其他版本重量。", "motion_caption": "单臂哑铃划船（手撑大腿） · 12帧/秒 · 真人连续动作 · Your Move（免费素材授权）", "continuous": true, "equipment": "哑铃", "pattern": "备选", "replace_candidate": 1}, {"id": "e24", "name": "哑铃高脚杯深蹲", "en": "Dumbbell Goblet Squat", "group": "腿臀", "cue": "哑铃靠胸，脚底踩稳，髋膝一起下降。", "target": "蹲类基础练习与前置负重控制。", "setup": "双脚选舒适站距，脚尖稍向外；双手托住竖直哑铃上端，哑铃靠近胸前，先收紧躯干。", "steps": ["髋膝协调弯曲下降，膝盖大致跟随脚尖方向。", "到脚底稳定、腰背能控制的深度，不照搬示范者的最低点。", "全脚掌推地站起，哑铃仍靠胸，不用后仰完成顶部。"], "breath": "下降前吸气并稳定躯干，站起时适度呼气，重复间重新准备。", "errors": ["足跟抬起 → 减少深度，重新调整站距。", "哑铃远离胸部 → 减重，保持靠近身体。"], "note": "可作为蹲类技术练习或器械不足时的备选；不是按杠铃深蹲公斤数直接换算。", "checks": ["全脚掌有支撑。", "膝盖没有突然内扣。", "起身时重量没有向前坠。"], "regress": "先用徒手深蹲或更轻哑铃，缩小到能稳定控制的深度。", "progress": "先稳定深度与次数，再使用小幅重量增量。", "uses": [{"label": "蹲类基础与轻负重备选", "sets": "尚未编入当前四日计划；选择后替换或单独安排，不自动加组"}], "rest": "1–2分钟起，以呼吸与动作控制恢复为准", "load": "先用轻重量确认动作版本。若选入计划，再确定工作组与目标次数；不直接套用其他版本重量。", "motion_caption": "哑铃高脚杯深蹲 · 12帧/秒 · 真人连续动作 · Your Move（免费素材授权）", "continuous": true, "equipment": "哑铃", "pattern": "备选", "replace_candidate": 6}, {"id": "e25", "name": "坐姿器械推胸", "en": "Seated Machine Chest Press", "group": "胸部", "cue": "背贴靠垫，手腕对齐，推回都受控。", "target": "胸部推力与肱三头肌辅助；提供有靠垫的推举版本。", "setup": "调座高，使握把在胸部附近且肩部舒适；背部贴垫，双脚踩稳，先用轻重量确认轨迹和收尾。", "steps": ["从舒适的起始位置向前推，保持手腕与前臂对齐。", "推到肘部接近伸直的可控位置，不猛烈撞击末端。", "缓慢回到肩部舒适的下放位置，配重不砸落。"], "breath": "推起呼气，回程吸气；不要持续憋气赶次数。", "errors": ["背部离垫借力 → 减重并固定坐姿。", "下放过深顶肩 → 调座高、减小无痛范围。"], "note": "可作为胸部推举备选；具体机器轨迹不同，不能假定一定比卧推无痛。", "checks": ["背部基本留在靠垫上。", "手腕没有明显后折。", "回程不突然失控。"], "regress": "减轻重量，调整座高和无痛范围；仍不适时停止。", "progress": "记录具体机器与座高，在相同设置下比较表现。", "uses": [{"label": "胸部推举备选（需独立选重）", "sets": "尚未编入当前四日计划；选择后替换或单独安排，不自动加组"}], "rest": "1–2分钟起，以呼吸与动作控制恢复为准", "load": "先用轻重量确认动作版本。若选入计划，再确定工作组与目标次数；不直接套用其他版本重量。", "motion_caption": "坐姿器械推胸 · 12帧/秒 · 真人连续动作 · Your Move（免费素材授权）", "continuous": true, "equipment": "推胸器械", "pattern": "备选", "replace_candidate": 11}, {"id": "e26", "name": "坐姿腿屈伸", "en": "Seated Leg Extension", "group": "腿臀", "cue": "膝轴对齐，伸膝不甩，回程慢放。", "target": "股四头肌孤立训练；不是深蹲或腿举的等效替代。", "setup": "调整靠背与座位，使膝关节大致对准机器轴；滚垫放在小腿下端、避开直接压踝的位置，坐稳并握好把手。", "steps": ["保持大腿与骨盆稳定，伸膝把滚垫举起。", "到可控且舒适的范围即可，不猛踢到关节末端。", "受控弯膝放回，配重不撞落，下一次重新控制。"], "breath": "伸膝呼气，弯回吸气。", "errors": ["甩腿踢起 → 减重，不借加速度。", "臀部抬起 → 调整座位、滚垫并降低重量。"], "note": "只作为腿部辅助备选，不用它直接替代整套蹲类动作；膝不适时停止相关动作。", "checks": ["膝与机器轴基本对齐。", "骨盆没有离开座垫。", "末端和回程均能减速。"], "regress": "先减重、确认机器设置，在无痛且受控的范围内练习。", "progress": "先增加标准次数，再提高最小配重；机器之间公斤数不直接比较。", "uses": [{"label": "股四头肌辅助备选", "sets": "尚未编入当前四日计划；选择后替换或单独安排，不自动加组"}], "rest": "1–2分钟起，以呼吸与动作控制恢复为准", "load": "先用轻重量确认动作版本。若选入计划，再确定工作组与目标次数；不直接套用其他版本重量。", "motion_caption": "坐姿腿屈伸 · 12帧/秒 · 真人连续动作 · Your Move（免费素材授权）", "continuous": true, "equipment": "腿屈伸器械", "pattern": "备选", "replace_candidate": null}, {"id": "e27", "name": "绳索面拉", "en": "Cable Rope Face Pull", "group": "肩部", "cue": "绳拉向脸侧，躯干稳定，手腕自然。", "target": "上背与肩后侧协调训练；与胸托反向飞鸟不是同一个动作。", "setup": "滑轮设在脸部附近或略高的位置，握绳退后站稳；双臂伸出，保持躯干稳定并用轻配重确认绳索不会碰脸。", "steps": ["将绳索向脸部两侧拉，手与前臂自然分开，肘部在舒适高度向外后方移动。", "在肩部舒适、受控的位置停止，不强行把手拉到头后。", "慢慢伸回手臂，身体不跟随配重前后晃动。"], "breath": "拉回呼气，伸回吸气。", "errors": ["后仰拉动全身 → 减重，重新站稳。", "强扭手腕或强拉到头后 → 使用自然握法与舒适范围。"], "note": "作为肩后侧与上背的另一个备选，不用其动图冒充胸托反向飞鸟。", "checks": ["躯干角度基本不变。", "肩部没有出现夹痛。", "回程绳索与配重均可控制。"], "regress": "使用更轻配重，缩小到舒适范围；不能稳定执行时先不选。", "progress": "先提高受控次数，再考虑最小配重；不追求用大重量后仰拉起。", "uses": [{"label": "肩后侧与上背备选", "sets": "尚未编入当前四日计划；选择后替换或单独安排，不自动加组"}], "rest": "1–2分钟起，以呼吸与动作控制恢复为准", "load": "先用轻重量确认动作版本。若选入计划，再确定工作组与目标次数；不直接套用其他版本重量。", "motion_caption": "绳索面拉 · 12帧/秒 · 真人连续动作 · Your Move（免费素材授权）", "continuous": true, "equipment": "绳索＋绳头", "pattern": "备选", "replace_candidate": null}], "days": [{"key": "ua", "day": "周一", "title": "上肢力量 A", "focus": "背部主导 · 水平推举", "time": "19:30–21:00", "pre": "16:30–16:45", "moves": [[0, "4 × 6–8"], [1, "3 × 6–8"], [2, "3 × 8–10"], [3, "3 × 8–10"], [4, "3 × 12–15"], [5, "2 × 10–12"]]}, {"key": "la", "day": "周二", "title": "下肢力量 A", "focus": "深蹲主导 · 髋铰链", "time": "19:30–21:00", "pre": "16:30–16:45", "moves": [[6, "4 × 4–6"], [7, "3 × 6–8"], [8, "3 × 10"], [9, "3 × 10–12"], [10, "3 × 10 / 侧"]]}, {"key": "ub", "day": "周四", "title": "上肢力量 B", "focus": "胸肩主导 · 水平拉力", "time": "19:30–21:00", "pre": "16:30–16:45", "moves": [[11, "4 × 4–6"], [13, "3 × 8–10"], [14, "3 × 8"], [15, "3 × 12–15"], [16, "2 × 10–12"]]}, {"key": "lb", "day": "周六", "title": "下肢力量 B", "focus": "硬拉主导 · 臀腿后链", "time": "10:00–11:30", "pre": "09:00–09:15", "moves": [[17, "3 × 4–5"], [18, "3 × 8"], [19, "3 × 8–10"], [9, "3 × 10–12"], [20, "3 × 10–12"]]}]};
for(const e of DATA.items){e.motion=document.querySelector("#static-"+e.id+" .motion img").getAttribute("src");}
const BASE_DAYS=JSON.parse(JSON.stringify(DATA.days));
const KEY='training-workbook-v5',LEGACY_KEY='jsen-training-v4';
const WEEK=['周日','周一','周二','周三','周四','周五','周六'];
const EQ={dumbbell:'哑铃',bench:'训练凳',barbell:'杠铃与安全架',cable:'绳索／下拉器械',chestpress:'推胸器械',legpress:'腿举器械',legcurl:'腿弯举器械',hack:'哈克深蹲器械',legextension:'腿屈伸器械',pullup:'引体向上架'};
const REQUIREMENTS={0:['pullup'],1:['dumbbell','bench'],2:['cable'],3:['dumbbell','bench'],4:['dumbbell'],5:['dumbbell'],6:['barbell'],7:['barbell'],8:['legpress'],9:['legcurl'],10:[],11:['barbell','bench'],12:['dumbbell','bench'],13:['cable'],14:['dumbbell','bench'],15:['dumbbell','bench'],16:['cable'],17:['barbell'],18:['legpress'],19:['barbell','bench'],20:['pullup'],21:[],22:['dumbbell'],23:['dumbbell'],24:['dumbbell'],25:['chestpress'],26:['legextension'],27:['cable']};
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const copy=x=>JSON.parse(JSON.stringify(x));
function validID(id){return typeof id==='string'&&/^[a-zA-Z0-9:._-]{1,100}$/.test(id);}
function uid(prefix='id'){return prefix+'-'+(globalThis.crypto?.randomUUID?.()||Date.now().toString(36)+'-'+Math.random().toString(36).slice(2));}
function localDate(d=new Date()){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
function validDate(s){if(typeof s!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(s))return false;const d=new Date(s+'T12:00:00');return Number.isFinite(+d)&&localDate(d)===s;}
function addDays(s,n){const d=new Date(s+'T12:00:00');d.setDate(d.getDate()+n);return localDate(d);}
function delta(a,b){return Math.round((new Date(a+'T12:00:00')-new Date(b+'T12:00:00'))/86400000);}
function nextMonday(){const d=new Date();d.setDate(d.getDate()+((8-d.getDay())%7||7));return localDate(d);}
function parseSets(s){const a=s.match(/^(\d+) × (\d+)(?:–(\d+))?/);return{count:+a[1],low:+a[2],high:+(a[3]||a[2])};}
function validTarget(s){if(typeof s!=='string'||!/^\d+ × \d+(?:–\d+)?(?: \/ 侧)?$/.test(s))return false;const q=parseSets(s);return q.count>=1&&q.count<=10&&q.low>=1&&q.high>=q.low&&q.high<=200;}
function validMoves(a){return Array.isArray(a)&&a.length<=10&&new Set(a.map(x=>x[0])).size===a.length&&a.every(x=>Array.isArray(x)&&x.length===2&&Number.isInteger(x[0])&&x[0]>=0&&x[0]<DATA.items.length&&validTarget(x[1]));}
function v51ValidWorkout(w){return w&&typeof w.key==='string'&&/^[a-z0-9_-]{1,32}$/.test(w.key)&&typeof w.title==='string'&&w.title.length<=80&&['strength','recovery'].includes(w.kind)&&['upper','lower','full','recovery'].includes(w.pattern)&&validMoves(w.moves)&&(w.kind==='recovery'?w.moves.length===0:w.moves.length>0)&&Number.isFinite(w.minutes)&&w.minutes>=10&&w.minutes<=120;}
function validPlan(p){return p&&validID(p.id)&&validDate(p.start)&&Array.isArray(p.workouts)&&p.workouts.length>=4&&p.workouts.length<=5&&p.workouts.every(validWorkout)&&new Set(p.workouts.map(w=>w.key)).size===p.workouts.length&&Array.isArray(p.schedule)&&p.schedule.length===p.workouts.length&&new Set(p.schedule.map(e=>e.id)).size===p.schedule.length&&new Set(p.schedule.map(e=>e.workoutKey)).size===p.schedule.length&&p.schedule.every(e=>e&&validID(e.id)&&validDate(e.date)&&p.workouts.some(w=>w.key===e.workoutKey))&&typeof p.label==='string'&&p.label.length<=120&&Array.isArray(p.reasons)&&p.reasons.every(x=>typeof x==='string'&&x.length<=500);}
function baseValidRecord(r,id=true){return r&&(!id||validID(r.id))&&validDate(r.date)&&typeof r.workoutKey==='string'&&/^[a-z0-9_-]{1,32}$/.test(r.workoutKey)&&typeof r.workoutTitle==='string'&&r.workoutTitle.length<=80&&['strength','recovery'].includes(r.kind)&&(r.planId===null||validID(r.planId))&&(r.scheduledId===null||validID(r.scheduledId))&&(r.scheduledDate===null||validDate(r.scheduledDate))&&['none','some'].includes(r.pain)&&['good','poor'].includes(r.quality)&&typeof r.note==='string'&&r.note.length<=1500&&(r.kind==='recovery'?(r.minutes===null||Number.isInteger(r.minutes)&&r.minutes>=0&&r.minutes<=180):true)&&Array.isArray(r.exercises)&&r.exercises.length<=10&&new Set(r.exercises.map(e=>e.index)).size===r.exercises.length&&(r.kind==='strength'?r.exercises.length>0:r.exercises.length===0)&&r.exercises.every(e=>e&&Number.isInteger(e.index)&&e.index>=0&&e.index<DATA.items.length&&validTarget(e.target)&&Array.isArray(e.sets)&&e.sets.length===parseSets(e.target).count&&e.sets.every(s=>s&&(s.weight===null||Number.isFinite(s.weight)&&s.weight>=0&&s.weight<=1000)&&(s.reps===null||Number.isInteger(s.reps)&&s.reps>=0&&s.reps<=200)&&(s.rir===null||Number.isInteger(s.rir)&&s.rir>=0&&s.rir<=10)));}
function validInfo(x){return x&&typeof x.name==='string'&&x.name.trim().length>=1&&x.name.length<=30&&(x.age===null||Number.isInteger(x.age)&&x.age>=1&&x.age<=100)&&['','beginner','returning','experienced'].includes(x.experience)&&['','consistent','sporadic','paused'].includes(x.recent)&&['','preserve','muscle','general'].includes(x.goal)&&[4,5].includes(x.days)&&[60,90].includes(x.duration)&&['','normal','low'].includes(x.recovery)&&['','none','some'].includes(x.pain)&&['','none','some'].includes(x.restrictions)&&Array.isArray(x.available)&&new Set(x.available).size===x.available.length&&x.available.every(n=>Number.isInteger(n)&&n>=0&&n<=6)&&Array.isArray(x.equipment)&&new Set(x.equipment).size===x.equipment.length&&x.equipment.every(k=>Object.hasOwn(EQ,k))&&[x.height,x.weight].every(v=>v===null||Number.isFinite(v)&&v>0&&v<=300);}
function baseValidProfile(p){return p&&validID(p.id)&&validInfo(p.info)&&(!p.plan||validPlan(p.plan))&&Array.isArray(p.logs)&&p.logs.length<=1000&&p.logs.every(r=>validRecord(r))&&new Set(p.logs.map(r=>r.id)).size===p.logs.length&&new Set(p.logs.map(r=>r.date+'|'+r.workoutKey)).size===p.logs.length&&p.drafts&&typeof p.drafts==='object'&&!Array.isArray(p.drafts)&&Object.keys(p.drafts).length<=100&&Object.entries(p.drafts).every(([k,r])=>/^(?:new:\d{4}-\d{2}-\d{2}\|[a-z0-9_-]{1,32}|edit:[a-zA-Z0-9:._-]{1,100})$/.test(k)&&validRecord(r,false));}
function validRoot(r){return r&&r.schemaVersion===5&&Array.isArray(r.profiles)&&r.profiles.length>=1&&r.profiles.length<=20&&r.profiles.every(validProfile)&&new Set(r.profiles.map(p=>p.id)).size===r.profiles.length&&r.profiles.some(p=>p.id===r.activeProfileId);}
function emptyInfo(name=''){return{name,age:null,experience:'',recent:'',goal:'',days:4,duration:90,recovery:'',pain:'',restrictions:'',available:[],equipment:[],height:null,weight:null};}
function baseEmptyProfile(id,name){return{id,info:emptyInfo(name),plan:null,logs:[],drafts:{}};}
function legacyRecord(r){if(!r||!['ua','la','ub','lb'].includes(r.day))throw Error('旧版记录的训练课不匹配。');const d=BASE_DAYS.find(d=>d.key===r.day);const result={...copy(r),id:r.id===undefined?undefined:String(r.id),workoutKey:r.day,workoutTitle:d.title,kind:'strength',minutes:null,scheduledId:null,scheduledDate:null,planId:r.planId===null?null:String(r.planId),pain:r.pain||'none',quality:r.quality||'good',note:r.note||''};if(!validRecord(result,r.id!==undefined))throw Error('旧版记录存在无效日期或数值。');delete result.day;return result;}
function legacyProfile(v){if(!v||!Array.isArray(v.logs))throw Error('不是可识别的V4备份。');const p=emptyProfile('jsen','Jsen');p.info.available=[1,2,4,6];if(v.plan){const old=v.plan;if(!validDate(old.start)||!Array.isArray(old.days)||old.days.length!==4)throw Error('旧版计划结构不匹配。');const workouts=old.days.map((d,k)=>({key:d.key,title:BASE_DAYS[k].title,focus:BASE_DAYS[k].focus,kind:'strength',pattern:k%2===0?'upper':'lower',moves:copy(d.moves),minutes:Number(old.duration)||90}));p.plan={id:String(old.id),start:old.start,label:'迁入的个人四日计划',template:'legacy',workouts,schedule:workouts.map((w,k)=>({id:String(old.id)+':'+w.key,workoutKey:w.key,date:addDays(old.start,[0,1,3,5][k])})),reasons:['来自V4已确认计划，动作、组次和日期保持原样。']};}
 p.logs=v.logs.map(legacyRecord);if(p.plan)for(const r of p.logs){const match=r.planId===p.plan.id&&p.plan.schedule.find(e=>e.workoutKey===r.workoutKey&&e.date===r.date);if(match){r.scheduledId=match.id;r.scheduledDate=match.date;}}for(const [key,r]of Object.entries(v.drafts||{})){const migrated=legacyRecord(r),nk=key.startsWith('edit:')?'edit:'+String(r.id??key.slice(5)):'new:'+migrated.date+'|'+migrated.workoutKey;p.drafts[nk]=migrated;}if(!validProfile(p))throw Error('旧版内容未通过完整性检查。');return p;}
let storageOK=true,storageLocked=false,loadMessage='';let root;
try{const raw=localStorage.getItem(KEY);if(raw){root=JSON.parse(raw);if(!validRoot(root))throw Error('新版保存数据不匹配，请使用备份恢复。');}else{const old=localStorage.getItem(LEGACY_KEY);const p=old?legacyProfile(JSON.parse(old)):emptyProfile('jsen','Jsen');root={schemaVersion:5,activeProfileId:p.id,profiles:[p]};if(old)loadMessage='已将本浏览器的旧版计划、记录和草稿迁入Jsen档案，旧版数据未覆盖。';}}catch(e){root=null;storageOK=false;storageLocked=true;loadMessage=e.message+' 当前尚未恢复这些数据。';}
if(!root)root={schemaVersion:5,activeProfileId:'jsen',profiles:[emptyProfile('jsen','Jsen')]};
let state=root.profiles.find(p=>p.id===root.activeProfileId),tab='dashboard',day=state.plan?.workouts[0].key||'ua',active=0,detail=false,query='',filter='全部',draftPlan=null;
let editingID=null,logDate=localDate(),selectedScheduleId=null,selectedWorkoutKey=null,workingSession=null,workingKey=null;
function persist(){if(storageLocked)return false;try{localStorage.setItem(KEY,JSON.stringify(root));storageOK=true;return true;}catch{storageOK=false;return false;}}
/* ---------- 第二轮第一批：计划依据（复用现有判据，不新增独立规则副本） ---------- */
const MAIN_LIFTS=[0,6,7,11,17];
const GOAL_LABELS={preserve:'减脂期间保持力量',muscle:'增肌',general:'规律活动与整体力量'};
const EXPERIENCE_LABELS={beginner:'新手 / 尚未建立训练习惯',returning:'停练后恢复',experienced:'有规律力量训练经验'};
const RECENT_LABELS={consistent:'持续规律训练',sporadic:'不规律 / 偶尔训练',paused:'基本未训练'};
const RECOVERY_LABELS={normal:'正常',low:'睡眠差或疲劳明显'};

// 与 v51BuildDraft 使用同一组判据，避免两套规则漂移。
function isNovice(i){return i.experience!=='experienced'||i.recent!=='consistent';}
function reducedSets(i){return i.duration===60||i.recovery==='low';}

function scheduleGaps(p){
  const entries=[...(p?.schedule||[])].sort((a,b)=>a.date.localeCompare(b.date))
    .map(e=>({date:e.date,w:(p.workouts||[]).find(w=>w.key===e.workoutKey)}))
    .filter(x=>x.w);
  const gaps=[];
  for(let i=0;i<entries.length;i++)for(let j=i+1;j<entries.length;j++){
    const a=entries[i],b=entries[j];
    if(a.w.kind!=='strength'||b.w.kind!=='strength')continue;
    if(a.w.pattern===b.w.pattern||a.w.pattern==='full'||b.w.pattern==='full')gaps.push({from:a.date,to:b.date,gap:delta(b.date,a.date)});
  }
  return gaps;
}

function planFacts(i,p){
  const novice=isNovice(i),strength=novice?2:4,recovery=Math.max(0,i.days-strength);
  const muscleGoal=!novice&&i.goal==='muscle';
  const causes=[];
  if(i.duration===60)causes.push('时长60分钟');
  if(i.recovery==='low')causes.push('恢复状态偏差');
  const reduced=!novice&&causes.length>0,overlap=!novice&&causes.length===2;
  const required=new Set();
  for(const w of p?.workouts||[])for(const [idx]of w.moves||[])for(const k of REQUIREMENTS[idx]||[])required.add(k);
  const missing=[...required].filter(k=>!i.equipment.includes(k));
  const tight=scheduleGaps(p).filter(g=>g.gap<2);
  const rows=[];
  rows.push({label:'训练经验与近期规律性',choice:EXPERIENCE_LABELS[i.experience]+'；最近四周：'+RECENT_LABELS[i.recent],changed:true,
    effect:novice?'采用全身基础 A/B 两次力量课，其余可用日期安排恢复活动。':'采用上下肢分化：上肢 A/B、下肢 A/B 各一次。'});
  rows.push({label:'主要目标',choice:GOAL_LABELS[i.goal],changed:muscleGoal,
    effect:muscleGoal?'主项动作次数区间改为 6–8（硬拉主项 5–6）；辅助动作不变。':'本模板不为目标改变动作、组数或次数区间；目标只影响记录后的进阶判断。'});
  rows.push({label:'力量课可用时长',choice:i.duration+' 分钟',changed:!novice&&i.duration===60,
    effect:novice?'不改变动作或组数，只作为单节预计时长。':i.duration===60?(overlap?'与恢复状态命中同一条减组规则：辅助动作共减 1 组，不叠加。':'辅助动作各减少 1 组，主项组数不变。'):(i.recovery==='low'?'时长本身不改变组数；本计划的减组来自恢复状态。':'按模板组数，不因时长增删。')});
  rows.push({label:'近期恢复状态',choice:RECOVERY_LABELS[i.recovery],changed:!novice&&i.recovery==='low',
    effect:!novice&&i.recovery==='low'?(overlap?'与 60 分钟时长命中同一条减组规则，只减 1 组。':'辅助动作各减少 1 组。'):novice&&i.recovery==='low'?'入门模板组数不变；疲劳持续时先暂停并复核状态。':'未触发减组，按模板组数。'});
  rows.push({label:'每周可安排天数',choice:i.days+' 天',changed:true,
    effect:'共 '+i.days+' 节：'+strength+' 次力量 + '+recovery+' 次恢复。'});
  const dates=[...(p?.schedule||[])].sort((a,b)=>a.date.localeCompare(b.date)).map(e=>e.date+' '+WEEK[new Date(e.date+'T12:00:00').getDay()]);
  rows.push({label:'可用日期',choice:i.available.map(n=>WEEK[n]).join('、'),changed:true,
    effect:dates.length?'实际排期：'+dates.join(' / ')+'。'+(tight.length?'其中存在间隔不足的力量课组合，按当前规则不应生成。':'同部位或全身力量课之间至少间隔 1 个非同类力量日。'):'尚未排期。'});
  rows.push({label:'可用器械',choice:i.equipment.length?i.equipment.map(k=>EQ[k]).join('、'):'未选择',changed:null,
    effect:missing.length?'缺少 '+missing.map(k=>EQ[k]).join('、')+'，按当前规则不允许生成该模板。':'该模板需要的 '+required.size+' 项器械均已具备；器械只决定模板能否执行，不改变组次。'});
  rows.push({label:'身高体重',choice:(i.height===null?'身高未填':i.height+' cm')+' / '+(i.weight===null?'体重未填':i.weight+' kg'),changed:false,
    effect:'不参与计划计算，也不用于推算工作重量。'});
  const shortParts=[novice?'按新手、停练后恢复或近期不规律，采用全身 A/B 两次力量':'按训练经验与近期规律性，采用上下肢各两次力量'];
  shortParts.push(i.days+' 天中 '+strength+' 次力量'+(recovery?'、'+recovery+' 次恢复':''));
  if(muscleGoal)shortParts.push('主项次数改为 6–8');
  if(reduced)shortParts.push(overlap?'时长与恢复偏差命中同一条减组规则，只减 1 组':(i.duration===60?'60 分钟时长使辅助动作各减 1 组':'恢复偏差使辅助动作各减 1 组'));
  shortParts.push(missing.length?'缺少 '+missing.map(k=>EQ[k]).join('、'):'器械条件满足');
  return {novice,template:novice?'foundation':'upper-lower',rows,short:shortParts.join('；')+'。',reduced,overlap,missing,tight};
}

function rationaleMarkup(p,showShort=true){
  const snap=p?.profileSnapshot;
  if(!snap||!validInfo(snap))return `${showShort?'<p class="rationale-short">该计划缺少生成时快照，无法给出依据摘要。</p>':''}<details class="rationale"><summary>计划依据</summary><p class="loghint">该计划由旧版本生成或迁移，没有保存建档条件快照，无法据此还原当时的判断依据。为避免编造理由，这里不推测原因；动作、组次与日期保持原样。</p></details>`;
  const f=planFacts(snap,p);
  const mismatch=p.template&&p.template!=='legacy'&&p.template!==f.template;
  const guarded=snap.pain==='some'||snap.restrictions==='some';
  return `${showShort?`<p class="rationale-short">${esc(f.short)}</p>`:''}<details class="rationale"><summary>计划依据</summary><p class="loghint">按生成时保存的建档快照解释（${esc(snap.name)}，${snap.age===null?'年龄未填':snap.age+' 岁'}）；之后修改个人资料不会改写这里。</p>${mismatch?'<p class="notice">该计划由更早版本的规则生成，下列说明按当前规则解释当时的条件，可能与原计划不完全一致。</p>':''}${guarded?'<p class="notice">快照中存在不适或已知训练限制，按当前规则不应自动生成计划；该计划来自旧版本或异常数据，请先复核。</p>':''}<dl class="factlist">${f.rows.map(r=>`<div><dt>${esc(r.label)}</dt><dd><span class="factchoice">当时选择：${esc(r.choice)}</span><span class="facteffect">${esc(r.effect)}</span>${r.changed===null?'<span class="factflag neutral">用于判断能否执行</span>':`<span class="factflag ${r.changed?'on':'off'}">${r.changed?'影响本计划':'未改变本模板'}</span>`}</dd></div>`).join('')}</dl><p class="loghint">以上仅为当前有限规则的说明，不构成个性化医学或训练建议。</p></details>`;
}
function profileProblems(i){const errors=[];if(i.age===null||!i.experience||!i.recent||!i.goal||!i.recovery||!i.pain||!i.restrictions)errors.push('请完成年龄、目标、训练经验、近期训练及当前状态。');if(i.age!==null&&(i.age<18||i.age>64))errors.push('当前模板仅覆盖18–64岁的一般成人；本版不自动生成该年龄范围以外的计划。');if(i.pain==='some'||i.restrictions==='some')errors.push('存在当前不适或已知训练限制，先由合适的专业人员确认可训练范围；暂停自动生成。');if(i.available.length<i.days)errors.push('可用日期少于选择的安排天数。');return errors;}
function strengthWork(key,title,pattern,moves,minutes){return{key,title,focus:pattern==='upper'?'上肢推拉':pattern==='lower'?'腿臀与核心':'全身基础',kind:'strength',pattern,moves,minutes};}
function recoveryWork(key,title){return{key,title,focus:'轻松步行或舒适活动',kind:'recovery',pattern:'recovery',moves:[],minutes:30};}
function chooseOrder(workouts,dates){const options=workouts.length===5&&workouts.filter(w=>w.kind==='strength').length===4?[2,1,3,0,4].map(n=>{const strength=workouts.filter(w=>w.kind==='strength'),recovery=workouts.find(w=>w.kind==='recovery');const a=[...strength];a.splice(n,0,recovery);return a;}):[workouts];for(const order of options){const schedule=order.map((w,k)=>({workoutKey:w.key,date:dates[k]}));if(!scheduleProblems(schedule,workouts,true).length)return schedule;}throw Error('这些日期无法满足本模板的恢复间隔，请换一组可用日期。');}
function scheduleProblems(schedule,workouts,weekly=false){const errors=[];if(schedule.some(e=>!validDate(e.date)))return['有无效日期。'];if(new Set(schedule.map(e=>e.date)).size!==schedule.length)errors.push('同一天只安排一节训练课。');const entries=schedule.map(e=>({...e,w:workouts.find(w=>w.key===e.workoutKey)})).sort((a,b)=>a.date.localeCompare(b.date));for(let i=0;i<entries.length;i++)for(let j=i+1;j<entries.length;j++){const a=entries[i],b=entries[j];if(a.w.kind!=='strength'||b.w.kind!=='strength')continue;if(a.w.pattern===b.w.pattern||a.w.pattern==='full'||b.w.pattern==='full'){const gap=delta(b.date,a.date);if(gap<2||(weekly&&7-gap<2))errors.push('相同部位或全身力量课之间至少留一个非同类力量训练日。');}}return [...new Set(errors)];}
function v51BuildDraft(c){const i=state.info,issues=profileProblems(i);if(issues.length)throw Error(issues.join(' '));if(!validDate(c.start)||new Date(c.start+'T12:00:00').getDay()!==1)throw Error('请选择周一作为该周的起始日期，实际训练日期可以自由选择。');const weekdays=c.weekdays.map(Number).sort((a,b)=>((a+6)%7)-((b+6)%7));if(weekdays.length!==i.days||new Set(weekdays).size!==weekdays.length||weekdays.some(n=>!i.available.includes(n)))throw Error(`请在档案可用日期内选择${i.days}天。`);const curl=Number(c.curl??5),bench=Number(c.bench??11);if(![5,22].includes(curl)||![11,12,25].includes(bench))throw Error('动作替换不受支持。');const novice=isNovice(i);let workouts,label,reasons=[];
 if(novice){workouts=[strengthWork('fa','全身基础 A','full',[[24,'2 × 8–10'],[25,'2 × 8–10'],[1,'2 × 8–10'],[9,'2 × 10–12'],[10,'2 × 8 / 侧']],i.duration),recoveryWork('ra','恢复活动 A'),strengthWork('fb','全身基础 B','full',[[8,'2 × 8–10'],[12,'2 × 8–10'],[2,'2 × 8–10'],[7,'2 × 8–10'],[10,'2 × 8 / 侧']],i.duration),recoveryWork('rb','恢复活动 B')];if(i.days===5)workouts.push(recoveryWork('rc','恢复活动 C'));label=i.days+'日入门安排（2次力量＋'+(i.days-2)+'次恢复）';reasons.push('根据新手、停练后恢复或近期不规律的状态，先安排两次全身基础力量，不把可用天数全部变成力量次数。');
 }else{workouts=BASE_DAYS.map((d,k)=>strengthWork(d.key,d.title,k%2===0?'upper':'lower',copy(d.moves),i.duration));const reduced=reducedSets(i);for(const w of workouts)w.moves=w.moves.map(([index,s])=>{const q=parseSets(s),main=MAIN_LIFTS.includes(index),count=reduced&&!main?Math.max(1,q.count-1):q.count;if(index===5)index=curl;if(index===11&&bench!==11)return[bench,`${count} × 6–8`];if(i.goal==='muscle'&&main)s=s.replace(/× .*/,index===17?'× 5–6':'× 6–8');return[index,s.replace(/^\d+/,String(count))];});if(i.days===5)workouts.push(recoveryWork('rc','恢复与轻活动'));label=i.days===4?'四日上下肢力量':'五日混合（4次力量＋1次恢复）';reasons.push('训练经验及近期规律性支持上下肢分化模板，每周上下肢各两次。');if(i.days===5)reasons.push('第五天用于恢复和轻活动，不额外追加高强度力量课。');if(reduced)reasons.push('时间较短或恢复偏差时，每个辅助动作减少1组；仍需保留充分休息。');}
 if(i.recovery==='low'&&novice)reasons.push('近期恢复偏差：基础模板保持低组数；如果疲劳持续，先暂停并复核状态。');reasons.push('目标：'+({preserve:'减脂期间保持力量',muscle:'增肌',general:'规律活动与整体力量'}[i.goal])+'；工作重量根据现场热身、动作质量和余力选择，不由身高体重推算。');const missing=new Set();for(const w of workouts)for(const [n]of w.moves)for(const k of REQUIREMENTS[n]||[])if(!i.equipment.includes(k))missing.add(EQ[k]);if(missing.size)throw Error('所选模板还需要：'+[...missing].join('、')+'。当前不自动拼接不匹配的居家替代模板。');const dates=weekdays.map(n=>addDays(c.start,(n+6)%7));const id=uid('plan'),schedule=chooseOrder(workouts,dates).map(e=>({...e,id:uid('session')}));return{id,start:c.start,label,template:novice?'foundation':'upper-lower',workouts,schedule,reasons,profileSnapshot:copy(i)};}
function currentUses(e){const index=DATA.items.indexOf(e),out=[];if(state.plan)for(const w of state.plan.workouts)for(const [i,sets]of w.moves)if(i===index){const sched=state.plan.schedule.find(x=>x.workoutKey===w.key);out.push({label:state.info.name+' · '+(sched?.date||'未排期')+' · '+w.title,sets});}return out.length?out:[{label:state.plan?'未选入本档案已确认计划':'本档案尚未确认计划',sets:'仅供教学查阅；组次由个人计划确定'}];}

function workout(key){return state.plan?.workouts.find(w=>w.key===key);}
function selectProfile(id){if(!root.profiles.some(p=>p.id===id))return;root.activeProfileId=id;state=root.profiles.find(p=>p.id===id);draftPlan=null;editingID=null;selectedScheduleId=null;selectedWorkoutKey=null;workingSession=null;logDate=localDate();day=state.plan?.workouts[0].key||'ua';active=0;detail=false;tab='dashboard';persist();render();window.scrollTo({top:0,behavior:'instant'});}
function moveSchedule(id,date){if(!validDate(date))throw Error('请选择有效日期。');const next=copy(state.plan.schedule),entry=next.find(e=>e.id===id);if(!entry)throw Error('安排不存在。');entry.date=date;const issues=scheduleProblems(next,state.plan.workouts);if(issues.length)throw Error(issues.join(' '));state.plan.schedule=next;persist();}
function plannedSession(id){const e=state.plan?.schedule.find(e=>e.id===id);const w=e&&workout(e.workoutKey);return e&&w?{e,w}:null;}
function newRecord(id,key,date){const scheduled=id?plannedSession(id):null,w=scheduled?.w||workout(key);if(!w)throw Error('请先生成计划，或从历史记录进入编辑。');return{date,workoutKey:w.key,workoutTitle:w.title,kind:w.kind,planId:state.plan.id,scheduledId:scheduled?.e.id||null,scheduledDate:scheduled?.e.date||null,pain:'none',quality:'good',note:'',minutes:null,exercises:w.moves.map(([index,target])=>({index,target,sets:Array.from({length:parseSets(target).count},()=>({weight:null,reps:null,rir:null}))}))};}
function recordKey(date,key,editing){return editing?'edit:'+editing:'new:'+date+'|'+key;}
function baseSaveRecord(r,editing){if(!validRecord(r,false))throw Error('请检查日期、数值及记录结构。');if(r.kind==='recovery'?!(r.minutes>0):!r.exercises.some(e=>e.sets.some(s=>s.reps!==null))&&!(r.execution?.endedAt&&r.execution.endReason.trim()))throw Error(r.kind==='recovery'?'请填写实际活动分钟数。':'至少填写一组实际次数，空白不会算完成。');if(state.logs.some(x=>x.id!==editing&&x.date===r.date&&x.workoutKey===r.workoutKey))throw Error('同日期、同训练课已有记录，请编辑原记录。');if(editing&&!state.logs.some(x=>x.id===editing))throw Error('原记录不存在。');if(!editing&&state.logs.length>=1000)throw Error('本档案记录已达1000条，请先导出备份。');const saved={...copy(r),id:editing||uid('record'),updatedAt:Date.now()};if(editing)state.logs=state.logs.map(x=>x.id===editing?saved:x);else state.logs.push(saved);return saved;}
function isUntouchedDefaultProfile(p){return p.id==='jsen'&&Object.entries(emptyInfo('Jsen')).every(([key,value])=>JSON.stringify(p.info[key])===JSON.stringify(value))&&!p.plan&&!p.logs.length&&!Object.keys(p.drafts).length&&!(p.planHistory||[]).length&&!Object.keys(p.sessionEvents||{}).length;}
function baseMergeProfile(incoming){if(!validProfile(incoming))throw Error('档案内容或数值不匹配。');const existing=root.profiles.find(p=>p.id===incoming.id);if(!existing){if(root.profiles.length>=20)throw Error('最多支持20个本机档案。');root.profiles.push(copy(incoming));return incoming.id;}const logs=[...existing.logs,...incoming.logs.filter(r=>!existing.logs.some(x=>x.id===r.id||x.date===r.date&&x.workoutKey===r.workoutKey))],drafts={...incoming.drafts,...existing.drafts};if(logs.length>1000||Object.keys(drafts).length>100)throw Error('合并后记录或草稿超出上限。');if(isUntouchedDefaultProfile(existing))existing.info=copy(incoming.info);existing.logs=logs;existing.drafts=drafts;if(!existing.plan&&incoming.plan)existing.plan=copy(incoming.plan);return existing.id;}
function importBackup(payload){let incoming;if(payload.schemaVersion===5&&payload.profile)incoming=payload.profile;else incoming=legacyProfile(payload);return mergeProfile(incoming);}
function downloadBackup(){downloadJSON({schemaVersion:5,profile:state},'训练档案_'+state.info.name.replace(/[^\p{L}\p{N}_-]/gu,'_')+'_'+localDate()+'.json');const n=document.querySelector('#runMessage')||document.querySelector('#profilemsg');if(n)n.textContent='备份已导出。注意：旧版本不识别“精简”标记，会把精简记录按完整课显示与统计。';}
function downloadJSON(data,name){const u=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json;charset=utf-8'})),a=document.createElement('a');a.href=u;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(u),1000);}

function application(e){return `<section class="application"><h3>本动作怎么安排</h3>${currentUses(e).map(u=>`<div class="usage"><span>${esc(u.label)}</span><strong>${u.sets}</strong></div>`).join('')}<p><b>组间休息</b> · ${e.rest}</p><p><b>重量 / 难度</b> · ${e.load}</p></section>`}
function additions(e){return `<section><h3>05 / 每组完成自检</h3><ul class="checks">${e.checks.map(x=>`<li>${x}</li>`).join('')}</ul></section><section><h3>06 / 难度调整与进步</h3><p><b>做不稳时</b> · ${e.regress}</p><p class="progress-note"><b>稳定之后</b> · ${e.progress}</p></section>`}
function coach(e,sets=''){return `<div class="coachtools"><button class="secondary mobileback" id="back">← 返回动作清单</button><button class="secondary print" id="print">打印当前教学</button><span class="subtle">${sets||'完整教学卡'}</span></div><div class="eyebrow numeric">${e.en.toUpperCase()} / ${e.group}</div><h2>${e.name}</h2><figure class="motion ${e.continuous?'continuous':''}"><img src="${e.motion}" alt="${e.name}动作姿势示意" width="560"><figcaption>${e.motion_caption}</figcaption></figure><p class="coachcue">${e.cue}</p><p class="target">${e.target}</p>${application(e)}<div class="teaching"><section><h3>01 / 准备姿势</h3><p>${e.setup}</p></section><section><h3>02 / 一次完整动作</h3><ol>${e.steps.map(x=>`<li>${x}</li>`).join('')}</ol></section><section><h3>03 / 呼吸与核心</h3><p>${e.breath}</p></section><section><h3>04 / 常见错误 → 调整</h3><div class="bad">${e.errors.map(x=>`<p>${x}</p>`).join('')}</div></section>${additions(e)}</div><div class="personal">版本提示 · ${e.note}</div>`}
function row(e,sets,n){let parts=sets.split(' × ');return `<button class="row ${active===DATA.items.indexOf(e)?'selected':''}" data-exercise="${DATA.items.indexOf(e)}" aria-label="查看${e.name}教学" aria-pressed="${active===DATA.items.indexOf(e)}"><span class="number numeric">${String(n+1).padStart(2,'0')}</span><span><span class="rowtitle">${e.name}</span><span class="rowhint">${e.cue}</span>${tab==='library'?`<span class="rowcontext">${currentUses(e).map(u=>esc(u.label)).join(' / ')}</span>`:''}</span><span class="sets numeric">${sets?`${parts[0]} ×<br>${parts[1]}`:'↗'}<small>${sets?'组 × 次':'查看教学'}</small></span></button>`}
const main=document.querySelector('#main');let creatingProfile=false;
function render(){document.querySelectorAll('[data-tab]').forEach(b=>{b.classList.toggle('active',(b.dataset.tab===tab||tab==='execute'&&b.dataset.tab==='plan'));b.setAttribute('aria-current',b.dataset.tab===tab?'page':'false')});const select=document.querySelector('#profileSwitch');select.innerHTML=root.profiles.map(p=>`<option value="${esc(p.id)}" ${p.id===state.id?'selected':''}>${esc(p.info.name)}${root.profiles.filter(x=>x.info.name===p.info.name).length>1?' · '+esc(p.id.slice(-6)):''}</option>`).join('');select.onchange=e=>{if(profileFormDirty()&&!confirm('当前档案有尚未保存的修改，切换档案会放弃这些修改。继续？')){e.target.value=state.id;return;}selectProfile(e.target.value);};document.querySelector('#profileName').textContent=state.info.name;document.querySelector('#daynav').innerHTML='';document.querySelector('#daynav').style.display='none';clearInterval(runTick);runTick=null;if(tab==='execute')renderExecute();else if(tab==='dashboard')renderDashboard();else if(tab==='profiles')renderProfiles();else if(tab==='setup')renderSetup();else if(tab==='plan')renderPlan();else if(tab==='library')renderLibrary();else if(tab==='trim')renderTrim();else if(tab==='swap')renderSwap();else renderLog();}
function setTab(t,force=false){if(!force&&tab==='profiles'&&profileFormDirty()&&!confirm('有尚未保存的档案修改。选择“确定”放弃修改并离开，选择“取消”继续编辑。'))return;tab=t;detail=false;creatingProfile=false;profileStep=0;profileEdited=false;render();window.scrollTo({top:0,behavior:'instant'});}
function choices(value,items){return '<option value="">请选择</option>'+items.map(([v,label])=>`<option value="${v}" ${String(value)===String(v)?'selected':''}>${label}</option>`).join('');}
function weekdayChecks(name,values,allowed=[1,2,3,4,5,6,0]){return `<div class="choicegrid">${[1,2,3,4,5,6,0].map(n=>`<label class="checkchoice"><input type="checkbox" name="${name}" value="${n}" ${values.includes(n)?'checked':''} ${allowed.includes(n)?'':'disabled'}>${WEEK[n]}</label>`).join('')}</div>`;}
/* ---------- 第二轮第一批：分步建档 ---------- */
let profileStep=0,profileEdited=false,pendingSetup=false;
const PROFILE_STEPS=['目标与经验','时间与器械','状态与限制','核对并保存'];
const PROFILE_FIELD_LABELS={name:'昵称',age:'年龄',goal:'主要目标',experience:'训练经验',recent:'最近四周训练',days:'每周可安排天数',duration:'力量课可用时长',available:'可用日期',equipment:'可用器械',recovery:'近期恢复状态',pain:'当前训练不适',restrictions:'已知训练限制',height:'身高',weight:'体重'};

function profileInfoFromForm(source){
  const f=source instanceof FormData?source:new FormData(source);
  const number=k=>f.get(k)===''?null:Number(f.get(k));
  return{name:String(f.get('name')??'').trim(),age:number('age'),experience:f.get('experience')??'',recent:f.get('recent')??'',goal:f.get('goal')??'',days:Number(f.get('days')),duration:Number(f.get('duration')),recovery:f.get('recovery')??'',pain:f.get('pain')??'',restrictions:f.get('restrictions')??'',available:f.getAll('available').map(Number),equipment:f.getAll('equipment'),height:number('height'),weight:number('weight')};
}

// 输入错误：格式、范围、必填。与“计划生成条件”分开判断。
function profileStepErrors(info,step){
  const errors=[],add=(field,message)=>errors.push({field,message,step});
  if(step===0){
    if(!info.name)add('name','请填写昵称。');
    else if(info.name.length>30)add('name','昵称不能超过 30 个字。');
    if(info.age===null)add('age','请填写年龄。');
    else if(!Number.isInteger(info.age)||info.age<1||info.age>100)add('age','年龄需为 1–100 的整数。');
    if(!info.goal)add('goal','请选择主要目标。');
    if(!info.experience)add('experience','请选择训练经验。');
    if(!info.recent)add('recent','请选择最近四周训练情况。');
    if(info.name){
      const others=root.profiles.filter(p=>p.id!==(creatingProfile?null:state.id));
      if(others.some(p=>p.info.name.toLowerCase()===info.name.toLowerCase()))add('name','昵称已存在，请用不同昵称区分档案。');
    }
  }
  if(step===1){
    if(![4,5].includes(info.days))add('days','请选择 4 天或 5 天。');
    if(![60,90].includes(info.duration))add('duration','请选择 60 或 90 分钟。');
    if(!info.available.length)add('available','请至少选择一个可用日期。');
  }
  if(step===2){
    if(!info.recovery)add('recovery','请选择近期恢复状态。');
    if(!info.pain)add('pain','请选择当前训练不适情况。');
    if(!info.restrictions)add('restrictions','请选择已知训练限制。');
    if(info.height!==null&&!(Number.isFinite(info.height)&&info.height>0&&info.height<=300))add('height','身高需在 1–300 厘米之间。');
    if(info.weight!==null&&!(Number.isFinite(info.weight)&&info.weight>0&&info.weight<=300))add('weight','体重需在 1–300 公斤之间。');
  }
  return errors;
}
function allProfileErrors(info){return [0,1,2].flatMap(step=>profileStepErrors(info,step));}
// 复用 profileProblems 作为唯一门禁来源，仅去掉“必填未完成”那句（它属于输入错误）。
function planBlockers(info){return profileProblems(info).filter(m=>m!=='请完成年龄、目标、训练经验、近期训练及当前状态。');}

function profileFormDirty(){return profileEdited&&!!document.querySelector('#profileForm');}

function updateProfileState(){
  const el=document.querySelector('#profileState');
  if(!el)return;
  el.textContent=profileEdited?(creatingProfile?'新建档案 · 尚未保存':'有尚未保存的修改'):(creatingProfile?'新建档案 · 尚未保存':'资料已保存');
  el.classList.toggle('dirty',profileEdited||creatingProfile);
}

function refreshProfileReview(){
  const form=document.querySelector('#profileForm');
  if(!form)return null;
  const info=profileInfoFromForm(form);
  const errors=allProfileErrors(info),blockers=planBlockers(info);
  const review=document.querySelector('#profileReview'),box=document.querySelector('#profileIssues');
  const rows=[
    ['昵称',info.name||'未填写'],['年龄',info.age===null?'未填写':info.age+' 岁'],
    ['主要目标',GOAL_LABELS[info.goal]||'未选择'],['训练经验',EXPERIENCE_LABELS[info.experience]||'未选择'],
    ['最近四周',RECENT_LABELS[info.recent]||'未选择'],['每周安排',info.days+' 天 / '+info.duration+' 分钟'],
    ['可用日期',info.available.length?info.available.map(n=>WEEK[n]).join('、'):'未选择'],
    ['可用器械',info.equipment.length?info.equipment.map(k=>EQ[k]).join('、'):'未选择'],
    ['恢复状态',RECOVERY_LABELS[info.recovery]||'未选择'],
    ['当前训练不适',info.pain?(info.pain==='some'?'有':'无'):'未选择'],
    ['已知训练限制',info.restrictions?(info.restrictions==='some'?'有':'无'):'未选择'],
    ['身高体重',(info.height===null?'未填':info.height+' cm')+' / '+(info.weight===null?'未填':info.weight+' kg')]
  ];
  const jump=`<div class="reviewjump"><span>返回修改</span>${PROFILE_STEPS.slice(0,3).map((t,k)=>`<button type="button" class="textbutton" data-goto-step="${k}">${k+1}. ${t}</button>`).join('')}</div>`;
  if(review){
    review.innerHTML=jump+`<dl class="reviewgrid">${rows.map(([k,v])=>`<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>`;
    review.querySelectorAll('[data-goto-step]').forEach(b=>{b.onclick=()=>goToProfileStep(+b.dataset.gotoStep,true);});
  }
  if(box)box.innerHTML=errors.length?`<p class="notice err" role="alert"><b>还有 ${errors.length} 处需要修正：</b>${errors.map(e=>esc(PROFILE_FIELD_LABELS[e.field])+'：'+esc(e.message)).join('；')}</p>`:blockers.length?`<p class="notice"><b>资料可以保存，但暂不满足生成计划的条件：</b>${blockers.map(esc).join(' ')}</p>`:'<p class="notice">资料完整，可以保存并生成计划。</p>';
  return {info,errors,blockers};
}

function goToProfileStep(n,focus=false){
  profileStep=Math.max(0,Math.min(3,n));
  document.querySelectorAll('[data-pstep]').forEach(s=>{s.hidden=+s.dataset.pstep!==profileStep;});
  document.querySelectorAll('[data-stepind]').forEach(li=>{
    const k=+li.dataset.stepind,active=k===profileStep;
    li.classList.toggle('active',active);li.classList.toggle('done',k<profileStep);
    if(active)li.setAttribute('aria-current','step');else li.removeAttribute('aria-current');
  });
  const prev=document.querySelector('#prevProfileStep'),next=document.querySelector('#nextProfileStep'),save=document.querySelector('#saveProfile');
  if(prev)prev.hidden=profileStep===0;
  if(next)next.hidden=profileStep===3;
  if(save)save.hidden=profileStep!==3;
  if(profileStep===3)refreshProfileReview();
  if(focus){
    const field=document.querySelector(`[data-pstep="${profileStep}"] input:not([type=checkbox]),[data-pstep="${profileStep}"] select`);
    if(field)field.focus({preventScroll:true});
    document.querySelector('.profilesteps')?.scrollIntoView({block:'nearest'});
  }
}

function showProfileErrors(errors){
  document.querySelectorAll('.fielderr').forEach(el=>{el.textContent='';});
  document.querySelectorAll('#profileForm [aria-invalid]').forEach(el=>el.removeAttribute('aria-invalid'));
  for(const e of errors){
    const box=document.querySelector(`[data-err="${e.field}"]`);
    if(box)box.textContent=e.message;
    const input=document.querySelector(`#profileForm [name="${e.field}"]`);
    if(input)input.setAttribute('aria-invalid','true');
  }
  const summary=document.querySelector('#profileerra');
  if(summary){summary.hidden=!errors.length;summary.textContent=errors.length?'请修正：'+errors.map(e=>PROFILE_FIELD_LABELS[e.field]).join('、'):'';}
}

function renderProfiles(){
  const info=creatingProfile?emptyInfo():state.info;
  main.innerHTML=`<section class="planner"><div class="eyebrow">PROFILE / 个人条件</div><div class="titleactions"><h1>${creatingProfile?'新建个人档案':'个人档案'}</h1>${creatingProfile?'':`<button class="secondary" id="newProfile">＋ 新建档案</button>`}</div><p class="loghint">每个档案独立保存计划、记录和草稿。当前是本机档案，没有账号登录或跨设备自动同步。</p>${loadMessage?`<p class="notice">${esc(loadMessage)}</p>`:''}${creatingProfile?'<p class="notice">新建档案 · 尚未保存。完成第 4 步核对后才会创建，取消不会写入任何资料。</p>':`<p class="notice">${esc(state.info.name)} · ${state.logs.length}条记录 · ${state.plan?esc(state.plan.label):'尚未确认计划'}。修改基础资料不会改写已有计划或记录。</p>`}<ol class="profilesteps" aria-label="建档步骤">${PROFILE_STEPS.map((t,k)=>`<li class="${k===profileStep?'active':''} ${k<profileStep?'done':''}" data-stepind="${k}" ${k===profileStep?'aria-current="step"':''}><b>${k+1}</b><span>${t}</span></li>`).join('')}</ol><form id="profileForm" class="planform profileform" novalidate><fieldset data-pstep="0"><legend class="srlabel">目标与经验</legend><label>昵称<input name="name" maxlength="30" autocomplete="off" value="${esc(info.name)}"><span class="fielderr" data-err="name"></span></label><label>年龄<input name="age" type="number" min="1" max="100" step="1" inputmode="numeric" value="${info.age??''}"><span class="fielderr" data-err="age"></span></label><label>主要目标<select name="goal">${choices(info.goal,[['preserve','减脂期间保持力量'],['muscle','增肌'],['general','规律活动与整体力量']])}</select><span class="fielderr" data-err="goal"></span></label><label>训练经验<select name="experience">${choices(info.experience,[['beginner','新手 / 尚未建立训练习惯'],['returning','停练后恢复'],['experienced','有规律力量训练经验']])}</select><span class="fielderr" data-err="experience"></span></label><label>最近四周训练<select name="recent">${choices(info.recent,[['consistent','持续规律训练'],['sporadic','不规律 / 偶尔训练'],['paused','基本未训练']])}</select><span class="fielderr" data-err="recent"></span></label><p class="wide loghint">目标与经验决定使用哪套模板；之后仍可返回修改，确认前不会写入。</p></fieldset><fieldset data-pstep="1"><legend class="srlabel">时间与器械</legend><label>每周可安排天数<select name="days"><option value="4" ${info.days===4?'selected':''}>4天活动安排</option><option value="5" ${info.days===5?'selected':''}>5天活动安排</option></select><span class="fielderr" data-err="days"></span></label><label>力量课可用时长<select name="duration"><option value="60" ${info.duration===60?'selected':''}>约60分钟</option><option value="90" ${info.duration===90?'selected':''}>约90分钟</option></select><span class="fielderr" data-err="duration"></span></label><div class="wide"><span class="fieldlabel">通常哪些日期有空？至少选${info.days}天</span>${weekdayChecks('available',info.available)}<p class="fielderr" data-err="available"></p></div><div class="wide"><span class="fieldlabel">实际可用器械（决定模板能否执行）</span><div class="choicegrid">${Object.entries(EQ).map(([k,v])=>`<label class="checkchoice"><input name="equipment" type="checkbox" value="${k}" ${info.equipment.includes(k)?'checked':''}>${v}</label>`).join('')}</div><p class="fielderr" data-err="equipment"></p></div><p class="wide loghint">四／五天是可安排的活动天数，不表示每天都是力量训练。器械只决定模板能否执行，不会自动替代。</p></fieldset><fieldset data-pstep="2"><legend class="srlabel">状态与限制</legend><label>近期恢复状态<select name="recovery">${choices(info.recovery,[['normal','正常'],['low','睡眠差或疲劳明显']])}</select><span class="fielderr" data-err="recovery"></span></label><label>当前训练不适<select name="pain">${choices(info.pain,[['none','没有已知不适'],['some','有疼痛或其他不适']])}</select><span class="fielderr" data-err="pain"></span></label><label>已知训练限制 / 正在康复<select name="restrictions">${choices(info.restrictions,[['none','没有已知限制'],['some','有 / 需要确认可训练范围']])}</select><span class="fielderr" data-err="restrictions"></span></label><label>身高 cm（可跳过）<input name="height" type="number" min="1" max="300" step="0.1" inputmode="decimal" value="${info.height??''}"><span class="fielderr" data-err="height"></span></label><label>体重 kg（可跳过）<input name="weight" type="number" min="1" max="300" step="0.1" inputmode="decimal" value="${info.weight??''}"><span class="fielderr" data-err="weight"></span></label><p class="wide loghint">身高体重只补充背景，不用来自动推算工作重量。存在不适或已知限制时仍可保存资料，但按规则暂停生成计划。</p></fieldset><fieldset data-pstep="3"><legend class="srlabel">核对并保存</legend><div id="profileReview"></div><div id="profileIssues"></div></fieldset><p id="profileerra" class="notice err" role="alert" hidden></p><div class="profilenav"><button type="button" class="secondary" id="prevProfileStep" hidden>← 上一步</button><button type="button" class="textbutton" id="cancelProfile">${creatingProfile?'取消新建':'取消修改'}</button><span class="profilestate" id="profileState">${creatingProfile?'新建档案 · 尚未保存':'资料已保存'}</span><button type="button" class="secondary" id="goSetup">去生成计划 →</button><button type="button" class="action" id="nextProfileStep">下一步 →</button><button type="submit" class="action" id="saveProfile" hidden>保存资料</button></div></form><p id="profilemsg" class="notice" role="status"></p>${creatingProfile?'<p class="loghint">新建档案需要单独确认；已有档案在确认前不会被改动。</p>':`<div class="planactions"><button class="secondary" id="backupProfile">导出当前档案</button><label class="secondary" style="padding:12px">导入旧版或档案备份<input id="importProfile" type="file" accept="application/json,.json" style="display:block;max-width:220px;margin-top:8px"></label></div><p class="loghint">备份包含“精简”标记。旧版本不识别该标记，会把精简记录按完整课显示与统计。</p>`}</section>`;

  const form=document.querySelector('#profileForm');
  const markDirty=()=>{profileEdited=true;updateProfileState();const msg=document.querySelector('#profilemsg');if(msg)msg.textContent='';document.querySelectorAll('#profileForm [aria-invalid]').forEach(el=>el.removeAttribute('aria-invalid'));document.querySelectorAll('.fielderr').forEach(el=>{el.textContent='';});const summary=document.querySelector('#profileerra');if(summary)summary.hidden=true;if(profileStep===3)refreshProfileReview();};
  form.addEventListener('input',markDirty);
  form.addEventListener('change',markDirty);
  document.querySelector('#newProfile')?.addEventListener('click',()=>{if(profileFormDirty()&&!confirm('当前档案有尚未保存的修改，确定放弃并新建档案？'))return;creatingProfile=true;profileStep=0;profileEdited=false;renderProfiles();});
  document.querySelector('#cancelProfile').addEventListener('click',()=>{
    if(profileEdited&&!confirm(creatingProfile?'放弃新建档案？已填写的内容不会保存。':'放弃本次修改？原资料不会被改变。'))return;
    const wasCreating=creatingProfile;
    creatingProfile=false;profileStep=0;profileEdited=false;renderProfiles();
    document.querySelector('#profilemsg').textContent=wasCreating?'已取消新建，未创建或修改任何档案。':'已取消修改，资料未改变。';
  });
  document.querySelector('#prevProfileStep').addEventListener('click',()=>goToProfileStep(profileStep-1,true));
  document.querySelector('#nextProfileStep').addEventListener('click',()=>{
    const errors=profileStepErrors(profileInfoFromForm(form),profileStep);
    showProfileErrors(errors);
    if(errors.length){const first=form.querySelector(`[name="${errors[0].field}"]`);if(first)first.focus();return;}
    goToProfileStep(profileStep+1,true);
  });
  document.querySelector('#goSetup').addEventListener('click',()=>{
    if(!profileEdited&&!creatingProfile){setTab('setup',true);return;}
    if(profileStep<3){goToProfileStep(3,true);document.querySelector('#profilemsg').textContent='请先在第 4 步核对并保存，再生成计划。';return;}
    pendingSetup=true;form.requestSubmit();
  });
  form.onsubmit=e=>{
    e.preventDefault();
    const info=profileInfoFromForm(form);
    const errors=allProfileErrors(info);
    if(errors.length){
      showProfileErrors(errors);goToProfileStep(errors[0].step,true);
      const first=form.querySelector(`[name="${errors[0].field}"]`);if(first)first.focus();
      document.querySelector('#profilemsg').textContent='还有输入需要修正，暂未保存。';pendingSetup=false;return;
    }
    try{
      if(!validInfo(info))throw Error('资料格式或数值不符合要求，请检查后重试。');
      const goSetupNext=pendingSetup;pendingSetup=false;
      if(creatingProfile){
        if(root.profiles.length>=20)throw Error('最多支持 20 个本机档案。');
        const p=emptyProfile(uid('profile'),info.name);p.info=info;root.profiles.push(p);root.activeProfileId=p.id;state=p;
      }else state.info=info;
      creatingProfile=false;profileEdited=false;profileStep=0;
      const saved=persist();
      render();
      document.querySelector('#profilemsg').textContent=saved?'资料已保存。':'资料暂存在页面内，保存失败，请导出备份。';
      if(goSetupNext)setTab('setup',true);
    }catch(err){document.querySelector('#profilemsg').textContent=err.message;pendingSetup=false;}
  };
  document.querySelector('#backupProfile')?.addEventListener('click',downloadBackup);
  if(document.querySelector('#importProfile'))bindImport('#importProfile','#profilemsg');
  goToProfileStep(profileStep);
}
function bindImport(inputSelector,msgSelector){document.querySelector(inputSelector).onchange=async e=>{if(profileEdited&&!confirm('当前档案有尚未保存的修改，导入备份会放弃这些修改。继续？')){e.target.value='';return;}try{const file=e.target.files[0];if(!file)return;if(file.size>10e6)throw Error('备份文件过大。');const incoming=JSON.parse(await file.text()),id=importBackup(incoming);storageLocked=false;profileStep=0;profileEdited=false;selectProfile(id);tab='profiles';render();document.querySelector('#profilemsg').textContent='备份已导入对应档案：'+state.info.name+'。未填写的空白默认档案恢复备份资料；已有个人资料、同项记录和草稿优先保留。已有当前计划时保持不变，备份中的不同计划存入历史计划。未将其他人的记录混入当前档案。';}catch(err){document.querySelector(msgSelector).textContent='导入失败：'+err.message}};}
function preview(p){return `<p class="notice"><b>${esc(p.label)}</b><br>${p.reasons.map(esc).join('<br>')}<br>这些是有限规则下的模板建议，需你确认；时长是安排偏好，不保证能按分钟精确完成。</p>${rationaleMarkup(p,false)}<div class="weekpreview">${[...p.schedule].sort((a,b)=>a.date.localeCompare(b.date)).map(e=>{const w=p.workouts.find(w=>w.key===e.workoutKey);return `<section><h3>${e.date} · ${WEEK[new Date(e.date+'T12:00:00').getDay()]}</h3><b>${esc(w.title)}</b>${w.kind==='recovery'?'<p class="loghint">约20–30分钟轻松步行或其他舒适活动；以能正常交谈为参考，不追加高强度力量。</p>':w.moves.map(([i,s])=>`<div class="planmove"><span>${DATA.items[i].name}</span><strong>${s}</strong></div>`).join('')}</section>`;}).join('')}</div>`;}
function renderSetup(){const i=state.info,issues=profileProblems(i);main.innerHTML=`<section class="planner"><div class="eyebrow">PLAN / ${esc(i.name)}</div><h1>生成个人计划</h1><p class="loghint">训练课与日期独立保存。可选星期，不固定周一、二、四、六。</p>${issues.length?`<p class="notice">${issues.map(esc).join('<br>')}</p><button class="action" onclick="setTab('profiles')">完善个人资料 →</button>`:`<form id="planform" class="planform"><label>哪一周开始（周一为周界）<input type="date" name="start" value="${nextMonday()}" required></label><label>档案条件<input value="${esc(i.name)} · ${i.days}天 · ${i.duration}分钟" disabled></label><div class="wide"><span class="fieldlabel">本周选择${i.days}天</span>${weekdayChecks('weekdays',i.available.slice(0,i.days),i.available)}</div>${i.experience==='experienced'&&i.recent==='consistent'?`<label>上肢A · 弯举<select name="curl"><option value="5">哑铃弯举</option><option value="22">锤式弯举</option></select></label><label>上肢B · 胸部主推<select name="bench"><option value="11">杠铃卧推</option><option value="12">中立握哑铃卧推</option><option value="25">坐姿器械推胸</option></select></label>`:''}<p class="wide loghint">四／五天是可安排的活动天数。系统根据经验和近期规律性区分力量课与恢复日；不把所有日期都安排成力量训练。</p><div class="wide"><button type="submit" class="action">生成草稿 →</button></div></form>`}<p id="planmsg" class="notice" role="status">${state.plan?'已确认计划仍保留，草稿不会覆盖它。':'生成后先核对动作和日期，再确认。'}</p><div id="draft"></div>${state.plan?`<details><summary>查看已确认计划</summary>${preview(state.plan)}</details>`:''}</section>`;const form=document.querySelector('#planform');if(form)form.onsubmit=e=>{e.preventDefault();try{const f=new FormData(e.target);draftPlan=buildDraft({start:f.get('start'),weekdays:f.getAll('weekdays'),curl:f.get('curl')??5,bench:f.get('bench')??11});document.querySelector('#draft').innerHTML=preview(draftPlan)+'<div class="planactions"><button class="action" id="confirmPlan">确认并应用</button><button class="secondary" id="discardPlan">放弃草稿</button></div>';document.querySelector('#planmsg').textContent='草稿已生成，请核对推荐依据和安排。';document.querySelector('#confirmPlan').onclick=()=>{if(!confirmPlanDraft())return;draftPlan=null;selectedScheduleId=null;selectedWorkoutKey=null;day=state.plan.schedule.slice().sort((a,b)=>a.date.localeCompare(b.date))[0].workoutKey;active=workout(day)?.moves[0]?.[0]||0;detail=false;persist();setTab('plan');};document.querySelector('#discardPlan').onclick=()=>{draftPlan=null;document.querySelector('#draft').innerHTML='';document.querySelector('#planmsg').textContent='草稿已放弃，原计划未改变。';};}catch(err){document.querySelector('#planmsg').textContent=err.message}};}
function renderPlan(){if(!state.plan){main.innerHTML=`<section class="planner"><h1>${esc(state.info.name)}的训练计划</h1><p class="notice">尚未确认个人计划。先填写资料，再根据条件生成草稿。</p><button class="action" onclick="setTab('profiles')">建立个人资料 →</button></section>`;return;}const p=state.plan,ordered=p.schedule.slice().sort((a,b)=>a.date.localeCompare(b.date));if(!workout(day))day=ordered[0].workoutKey;const w=workout(day),entry=p.schedule.find(e=>e.workoutKey===day),courseState=entryStatus(state,entry.id),completed=courseState==='completed';document.querySelector('#daynav').style.display='flex';document.querySelector('#daynav').className='daynav flexible';document.querySelector('#daynav').innerHTML=ordered.map(e=>{const x=workout(e.workoutKey);return `<button data-workout="${x.key}" class="${day===x.key?'active':''}"><span>${e.date.slice(5)} · ${WEEK[new Date(e.date+'T12:00:00').getDay()]}</span><strong>${esc(x.title)}</strong></button>`}).join('');document.querySelectorAll('[data-workout]').forEach(b=>b.onclick=()=>{day=b.dataset.workout;active=workout(day).moves[0]?.[0]||0;detail=false;renderPlan();});main.innerHTML=`<div class="headline"><div><div class="eyebrow">${esc(state.info.name)} / ${esc(p.label)}</div><h1>${esc(w.title)}</h1><div class="schedule">计划 ${entry.date} · ${BOARD_STATUS[courseState]} · ${w.kind==='recovery'?'恢复活动':'力量训练'}</div></div><button class="action" onclick="beginRun('${entry.id}')">${completed?'查看或编辑本课记录':'开始／继续这节训练'} →</button></div>${trimEligible(entry.id)?'<div class="trimentry"><button class="secondary" id="trimPlan">时间不足？查看精简方案</button><span class="loghint">仅本次，不改计划</span></div>':''}${swapRelevant(entry.id)?'<div class="trimentry"><button class="secondary" id="swapPlan">器械被占？查看替代方案</button><span class="loghint">仅本次，每次一个动作</span></div>':''}${rationaleMarkup(p)}${routinePreview(w)}<div class="reschedule"><label>调整本课日期<input id="rescheduleDate" type="date" value="${entry.date}"></label><button class="secondary" id="reschedule">确认改期</button><span id="schedulemsg" role="status">改期保留训练课身份，旧记录及草稿日期不跟随改变。</span></div>${w.kind==='recovery'?`<section class="reviewbox"><h3>轻活动与恢复</h3><p>约20–30分钟轻松步行或其他舒适活动，以能正常交谈为参考。存在不适时停止相关活动。</p><p>记录实际活动分钟数和当天状态，不要求填写力量组次。</p></section>`:`<div class="workspace ${detail?'detail':''}"><section class="exercise-list"><div class="listhead"><span>${w.moves.length}个动作 · 热身组另计</span><span>点选查看教学</span></div><div class="rows">${w.moves.map(([i,s],n)=>row(DATA.items[i],s,n)).join('')}</div><p class="listnote">每次按热身、动作质量和余力选择工作重量，不从身高体重自动推算。</p></section><article class="coach">${coach(DATA.items[w.moves.some(x=>x[0]===active)?active:(active=w.moves[0][0])],w.moves.find(x=>x[0]===active)?.[1]||'')}</article></div>`}<p class="notice">本课组次与日期属于已确认计划；资料变化不会自动重新生成。需要调整结构时重新生成草稿。恢复不佳或出现不适时，先复核是否应继续本次训练。</p>`;document.querySelector('#reschedule').onclick=()=>{try{moveSchedule(entry.id,document.querySelector('#rescheduleDate').value);renderPlan();document.querySelector('#schedulemsg').textContent='已改期，旧记录和草稿未改变。';}catch(err){document.querySelector('#schedulemsg').textContent=err.message}};if(w.kind==='strength')bindRows();document.querySelector('#trimPlan')?.addEventListener('click',()=>openTrimPreview(entry.id));document.querySelector('#swapPlan')?.addEventListener('click',()=>openSwapPreview(entry.id));}
function bindRows(){document.querySelectorAll('[data-exercise]').forEach(b=>b.onclick=()=>{active=+b.dataset.exercise;detail=true;if(tab==='library')renderResults();else renderPlan();if(innerWidth<=760)document.querySelector('.coach')?.scrollIntoView({behavior:'smooth',block:'start'})});document.querySelector('#back')?.addEventListener('click',()=>{detail=false;if(tab==='library')renderResults();else renderPlan()});document.querySelector('#print')?.addEventListener('click',()=>window.print());}
function renderLibrary(){main.innerHTML=`<div class="headline"><div><div class="eyebrow">EXERCISE INDEX / 共享教学</div><h1>动作库</h1><div class="schedule">28项教学 · 计划与记录按个人档案独立保存</div></div></div><p class="notice">动作库是共享教学，不代表每个人都要做全部动作。胸托划船、死虫式、胸托反向飞鸟、哈克深蹲仍使用标注的示意动画。</p><div class="librarytop"><input class="search" id="search" value="${esc(query)}" placeholder="搜索名称／英文／部位" aria-label="搜索动作"></div><div class="filters">${['全部','背部','胸部','肩部','手臂','腿臀','核心'].map(x=>`<button data-filter="${x}" class="${filter===x?'active':''}">${x}</button>`).join('')}</div><div id="results"></div>`;document.querySelector('#search').oninput=e=>{query=e.target.value;detail=false;renderResults()};document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{filter=b.dataset.filter;detail=false;document.querySelectorAll('[data-filter]').forEach(x=>x.classList.toggle('active',x.dataset.filter===filter));renderResults()});renderResults();}
function renderResults(){const arr=DATA.items.filter(e=>(filter==='全部'||e.group===filter)&&`${e.name} ${e.en} ${e.group}`.toLowerCase().includes(query.trim().toLowerCase()));if(arr.length&&!arr.includes(DATA.items[active]))active=DATA.items.indexOf(arr[0]);document.querySelector('#results').innerHTML=arr.length?`<div class="count">找到${arr.length}个动作</div><div class="workspace ${detail?'detail':''}"><section class="exercise-list"><div class="rows">${arr.map((e,n)=>row(e,'',n)).join('')}</div></section><article class="coach">${coach(DATA.items[active])}</article></div>`:'<p class="empty">没有匹配动作。</p>';bindRows();}

function openLog(id){const completed=state.logs.find(r=>r.scheduledId===id);if(completed){openEditor(completed.id);return;}const match=plannedSession(id);if(!match)return;editingID=null;selectedScheduleId=id;selectedWorkoutKey=match.w.key;logDate=localDate();tab='log';render();window.scrollTo({top:0,behavior:'smooth'});}
function openEditor(id){const r=state.logs.find(r=>r.id===id);if(!r)return;editingID=id;selectedScheduleId=r.scheduledId;selectedWorkoutKey=r.workoutKey;logDate=r.date;tab='log';render();window.scrollTo({top:0,behavior:'smooth'});}
function pendingDrafts(){const arr=Object.entries(state.drafts).filter(([k,r])=>r.execution||r.note.trim()||r.pain==='some'||r.quality==='poor'||r.minutes!==null||r.exercises.some(e=>e.sets.some(s=>s.weight!==null||s.reps!==null||s.rir!==null)));return arr.length?`<details class="notice" open><summary>本档案未提交草稿 · ${arr.length}份</summary>${arr.map(([key,r])=>`<div class="loghistory"><span>${r.date} · ${esc(r.workoutTitle)}${key.startsWith('edit:')?'（修改中）':''}</span><button class="secondary" data-resume="${esc(key)}">恢复草稿</button></div>`).join('')}</details>`:'';}
function resumeDraft(key){const r=state.drafts[key];if(!r)return;if(r.execution){resumeRun(key);return;}const edit=key.startsWith('edit:')?key.slice(5):null;if(edit&&!state.logs.some(x=>x.id===edit)){document.querySelector('#logmsg').textContent='草稿对应的原记录不存在，不能更新。';return;}editingID=edit;selectedWorkoutKey=r.workoutKey;selectedScheduleId=r.scheduledId;logDate=r.date;renderLog();window.scrollTo({top:0,behavior:'smooth'});}
function historyMarkup(){return `<h3>本档案已保存 ${state.logs.length}次</h3>${state.logs.slice().sort((a,b)=>b.date.localeCompare(a.date)).slice(0,20).map(r=>`<div class="loghistory"><span>${r.date} · ${esc(r.workoutTitle)}${sessionLabel(r)} · ${RECORD_STATUS[r.status]||'待确认'}</span><div class="historyactions"><button class="secondary" data-view="${esc(r.id)}">查看</button><button class="secondary" data-edit="${esc(r.id)}">编辑</button></div></div>`).join('')||'<p class="loghint">暂无实际记录，不把计划视为已经完成。</p>'}<div id="historydetail"></div>`;}
function backupsMarkup(){return '<div class="planactions"><button class="secondary" id="backup">导出当前档案与草稿</button><label class="secondary" style="padding:12px">导入备份<input id="restore" type="file" accept="application/json,.json" style="display:block;max-width:220px;margin-top:8px"></label></div>';}
function baseCollectRecord(){if(!workingSession)return null;const r=copy(workingSession);r.date=document.querySelector('#logDate').value;r.pain=document.querySelector('#logPain').value;r.quality=document.querySelector('#logQuality').value;r.note=document.querySelector('#logNote').value;if(r.kind==='recovery'){const s=document.querySelector('#activityMinutes').value;r.minutes=s===''?null:Number(s);}else for(const input of document.querySelectorAll('[data-field]')){const e=r.exercises.find(e=>e.index===+input.dataset.i);e.sets[+input.dataset.j][input.dataset.field]=input.value===''?null:Number(input.value);}return r;}
function saveDraft(dateOverride=null){const r=collectRecord();if(!r)return;if(dateOverride)r.date=dateOverride;const label=document.querySelector('#draftStatus');if(!validRecord(r,false)){if(label)label.textContent='当前有无效输入，修正后才会自动保存草稿。';return false;}if(!Object.hasOwn(state.drafts,workingKey)&&Object.keys(state.drafts).length>=100){label.textContent='草稿已达100份，当前内容尚未保存，请先提交已有草稿。';return false;}state.drafts[workingKey]=r;const ok=persist();label.textContent=ok?'草稿已自动保存 · 尚未提交为完成记录':'草稿暂存在页面内，浏览器保存失败，请导出备份。';return ok;}
function renderLog(){if(!selectedWorkoutKey&&state.plan){const sorted=state.plan.schedule.slice().sort((a,b)=>a.date.localeCompare(b.date));const suggested=sorted.find(e=>e.date===localDate())||sorted.find(e=>e.date>=localDate())||sorted[sorted.length-1];selectedScheduleId=suggested.id;selectedWorkoutKey=suggested.workoutKey;}const key=recordKey(logDate,selectedWorkoutKey,editingID);const old=editingID?state.logs.find(r=>r.id===editingID):null;let r=state.drafts[key]||old;if(!r&&(plannedSession(selectedScheduleId)||state.plan?.workouts.some(w=>w.key===selectedWorkoutKey)))r=newRecord(selectedScheduleId,selectedWorkoutKey,logDate);workingSession=r?copy(r):null;workingKey=key;main.innerHTML=`<section class="planner"><div class="eyebrow">RECORD / ${esc(state.info.name)}</div><h1>${editingID?'编辑实际记录':'训练记录'}</h1>${pendingDrafts()}${r?`<p class="loghint">记录的是实际完成日期和训练内容。计划日期只作为来源；改期与新计划不会改写本记录快照。</p><div class="logmeta"><label>实际训练日期<input id="logDate" type="date" value="${r.date}" required></label><label>选择训练课<select id="logWorkout" ${editingID||r.planId!==state.plan?.id?'disabled':''}>${r.planId===state.plan?.id&&state.plan?.workouts.some(w=>w.key===r.workoutKey)?state.plan.workouts.map(w=>`<option value="${w.key}" ${w.key===r.workoutKey?'selected':''}>${esc(w.title)}${w.kind==='recovery'?'（恢复）':''}</option>`).join(''):`<option value="${esc(r.workoutKey)}">${esc(r.workoutTitle)}（保存的快照）</option>`}</select></label><label>本次是否出现不适<select id="logPain"><option value="none" ${r.pain==='none'?'selected':''}>没有</option><option value="some" ${r.pain==='some'?'selected':''}>有 / 写明位置和活动</option></select></label><label>动作／活动质量<select id="logQuality"><option value="good" ${r.quality==='good'?'selected':''}>基本稳定、受控</option><option value="poor" ${r.quality==='poor'?'selected':''}>失控或难以维持</option></select></label>${statusField(r)}<label class="wide">备注<textarea id="logNote" maxlength="1500" placeholder="重量单位、器械挡位、辅助程度、睡眠、疲劳与不适">${esc(r.note)}</textarea></label></div><p class="loghint">来源：${esc(r.workoutTitle)} · 原计划日期 ${r.scheduledDate||'未关联'} · ${r.kind==='recovery'?'恢复活动':'力量课'}；填写空白不算完成。</p><p id="draftStatus" class="notice" role="status">${state.drafts[key]?'已恢复未提交草稿。':editingID?'修改后更新原记录，不重复新增。':'填写后自动保存，提交后才进入历史。'}</p><form id="sessionForm">${r.kind==='strength'?`<label class="activityfield">实际训练分钟数（可选）<input id="strengthMinutes" type="number" min="0" max="360" step="1" value="${r.minutes??''}" placeholder="未填写"></label>`:''}${r.kind==='recovery'?`<label class="activityfield">实际活动分钟数<input id="activityMinutes" type="number" min="0" max="180" step="1" value="${r.minutes??''}" placeholder="未填写"></label><p class="loghint">可记录步行、轻有氧或其他舒适活动，具体内容写在备注。恢复日不生成力量进阶建议。</p>`:r.exercises.map(e=>`<section class="logexercise"><h3>${DATA.items[e.index].name} <span class="loghint">计划 ${e.target}</span></h3><p class="loghint">${DATA.items[e.index].rest}</p><div class="sethead"><span>组</span><span>实际重量 kg</span><span>实际次数</span><span>余力 RIR</span></div>${e.sets.map((s,j)=>`<div class="setentry"><span>${j+1}</span>${[['weight','重量',1000,0.5],['reps','次数',200,1],['rir','余力',10,1]].map(([field,label,max,step])=>`<input type="number" aria-label="${DATA.items[e.index].name}第${j+1}组${label}" min="0" max="${max}" step="${step}" data-i="${e.index}" data-j="${j}" data-field="${field}" value="${s[field]??''}" placeholder="${field==='reps'?'未做':'未填'}">`).join('')}</div>`).join('')}</section>`).join('')}<div class="planactions"><button class="action" type="submit">${editingID?'保存修改':'保存本次实际记录'}</button>${editingID?'<button id="cancelEdit" type="button" class="secondary">取消修改</button>':''}</div></form>`:'<p class="notice">尚未选择个人计划。可以先生成计划，或从上方草稿／下方历史记录恢复查看。</p><button class="action" onclick="setTab(\'setup\')">生成计划 →</button>'}<p id="logmsg" class="notice" role="status">${storageOK?'记录属于当前档案。换设备或打开另一个文件副本时，请导出、导入JSON备份。':'本次浏览器保存受限，请立即导出备份。'}</p><div id="advice"></div>${r?executionReview(r):''}${backupsMarkup()}${historyMarkup()}</section>`;if(r){const form=document.querySelector('#sessionForm');form.oninput=()=>saveDraft();for(const selector of ['#logNote','#logPain','#logQuality','#recordStatus'])document.querySelector(selector).oninput=()=>saveDraft();document.querySelector('#logDate').onchange=()=>{const date=document.querySelector('#logDate').value;if(!validDate(date)){document.querySelector('#draftStatus').textContent='请选择有效日期。';return;}const nextKey=recordKey(date,r.workoutKey,editingID);if(nextKey!==workingKey&&state.drafts[nextKey]){saveDraft(workingSession.date);logDate=date;renderLog();return;}const oldKey=workingKey;logDate=date;workingKey=nextKey;workingSession=collectRecord();saveDraft();if(nextKey!==oldKey){delete state.drafts[oldKey];persist();}};document.querySelector('#logWorkout').onchange=e=>{saveDraft();selectedWorkoutKey=e.target.value;selectedScheduleId=state.plan.schedule.find(s=>s.workoutKey===selectedWorkoutKey)?.id||null;editingID=null;renderLog()};form.onsubmit=e=>{e.preventDefault();try{if(!document.querySelector('#logDate').reportValidity())return;const saved=saveRecord(collectRecord(),editingID);delete state.drafts[workingKey];persist();editingID=null;logDate=saved.date;renderLog();document.querySelector('#logmsg').textContent=storageOK?'已保存实际记录，属于'+state.info.name+'的档案。':'暂存在页面内，浏览器保存失败，请导出备份。';showAdvice(saved);}catch(err){document.querySelector('#logmsg').textContent=err.message}};document.querySelector('#cancelEdit')?.addEventListener('click',()=>{delete state.drafts[workingKey];persist();editingID=null;renderLog();document.querySelector('#logmsg').textContent='修改已取消，原记录未改变。';});}document.querySelector('#backup').onclick=()=>{if(workingSession)saveDraft();downloadBackup();};bindImport('#restore','#logmsg');document.querySelectorAll('[data-resume]').forEach(b=>b.onclick=()=>resumeDraft(b.dataset.resume));document.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>viewRecord(b.dataset.view));document.querySelectorAll('[data-edit]').forEach(b=>b.onclick=()=>{if(workingSession)saveDraft();openEditor(b.dataset.edit)});}
function viewRecord(id){const r=state.logs.find(r=>r.id===id);document.querySelector('#historydetail').innerHTML=`<h3>${r.date} · ${esc(r.workoutTitle)}</h3><p class="loghint">实际日期 ${r.date} / 记录时计划日期 ${r.scheduledDate||'未关联'}<br>${esc(r.note||'无备注')} · ${r.pain==='some'?'有不适':'无不适'}</p>${r.kind==='recovery'?`<p class="notice">实际活动 ${r.minutes}分钟</p>`:r.exercises.map(e=>`<section class="logexercise"><h3>${DATA.items[e.index].name}</h3>${e.sets.map((s,j)=>`<div class="planmove"><span>第${j+1}组</span><span>${s.weight??'—'}kg / ${s.reps??'—'}次 / 余力${s.rir??'—'}</span></div>`).join('')}</section>`).join('')}${executionReview(r)}`;showAdvice(r);}
function adviceFor(r){if(r.pain==='some')return['本次有不适，先明确触发动作或活动及可继续的范围，不增加负荷。'];if(r.quality==='poor')return['本次动作或活动不稳定，先降低难度并恢复控制，不据此增加负荷。'];if(r.kind==='recovery')return['已记录恢复活动。请结合睡眠、疲劳及下次训练表现观察，不生成力量加重建议。'];return r.exercises.map(e=>{const n=DATA.items[e.index].name,q=parseSets(e.target);if(e.sets.some(s=>s.reps===null||s.rir===null||r.execution&&s.status!=='completed'))return n+'：记录不完整，暂不判断进阶。';if(e.sets.some(s=>s.reps<q.low||s.rir<2))return n+'：部分组次数或余力不足，下次先保持或降低难度。';const prior=state.logs.filter(x=>x.status==='completed'&&x.id!==r.id&&x.date<r.date&&x.kind==='strength'&&x.workoutKey===r.workoutKey).sort((a,b)=>b.date.localeCompare(a.date))[0],pe=prior?.exercises.find(x=>x.index===e.index);const done=x=>x&&x.sets.length===q.count&&x.sets.every(s=>(s.status===undefined||s.status==='completed')&&s.reps!==null&&s.reps>=q.high&&s.rir!==null&&s.rir>=2);if(done(e)&&done(pe)&&pe.target===e.target&&prior.pain==='none'&&prior.quality==='good'&&pe.sets.every((s,j)=>s.weight!==null&&s.weight===e.sets[j]?.weight))return n+'：两次同版本记录均达到次数上限并留有余力，可考虑最小重量增量；需确认器械、辅助程度和幅度一致。';return n+'：先保持重量或难度，逐步达到次数上限。当前证据不足以支持自动加重。';});}
function showAdvice(r){document.querySelector('#advice').innerHTML='<h3>下次调整参考 · 不自动应用</h3><ul class="suggestions">'+adviceFor(r).map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul>';}

function v51ValidRecord(r,id=true){return baseValidRecord(r,id)&&(r.status===undefined||Object.hasOwn(RECORD_STATUS,r.status))&&(r.minutes===null||r.minutes===undefined||Number.isInteger(r.minutes)&&r.minutes>=0&&r.minutes<=360);}
function validProfile(p){return baseValidProfile(p)&&(p.planHistory===undefined||Array.isArray(p.planHistory)&&p.planHistory.length<=200&&p.planHistory.every(validPlan)&&new Set(p.planHistory.map(p=>p.id)).size===p.planHistory.length)&&(p.sessionEvents===undefined||p.sessionEvents&&typeof p.sessionEvents==='object'&&!Array.isArray(p.sessionEvents)&&Object.keys(p.sessionEvents).length<=1000&&Object.entries(p.sessionEvents).every(([id,x])=>validID(id)&&x&&x.status==='skipped'&&typeof x.reason==='string'&&x.reason.length<=300&&validDate(x.date)));}
function upgradeProfile(p){p.planHistory??=[];p.sessionEvents??={};for(const r of p.logs)r.status??='unconfirmed';for(const r of Object.values(p.drafts))r.status??='in_progress';return p;}
function emptyProfile(id,name){return upgradeProfile(baseEmptyProfile(id,name));}
function allPlans(p=state){const m=new Map();for(const plan of p.planHistory||[])m.set(plan.id,plan);if(p.plan)m.set(p.plan.id,p.plan);return [...m.values()];}
function plannedSession(id){for(const p of allPlans()){const e=p.schedule.find(e=>e.id===id);if(e)return{e,w:p.workouts.find(w=>w.key===e.workoutKey),p};}return null;}
function newRecord(id,key,date){const x=id?plannedSession(id):null,w=x?.w||workout(key),p=x?.p||state.plan;if(!w||!p)throw Error('请选择已确认的训练课。');return{date,workoutKey:w.key,workoutTitle:w.title,kind:w.kind,planId:p.id,scheduledId:x?.e.id||null,scheduledDate:x?.e.date||null,pain:'none',quality:'good',note:'',minutes:null,status:'in_progress',exercises:w.moves.map(([index,target])=>({index,target,sets:Array.from({length:parseSets(target).count},()=>({weight:null,reps:null,rir:null}))}))};}
function collectRecord(){const r=baseCollectRecord();if(!r)return null;r.status=document.querySelector('#recordStatus')?.value||r.status||'in_progress';if(r.kind==='strength'){const v=document.querySelector('#strengthMinutes')?.value;r.minutes=v===undefined||v===''?null:Number(v);}return r;}
function saveRecord(r,editing){if(r.status==='completed'&&r.date>localDate())throw Error('未来日期不能确认已结束，请核对实际训练日期。');const saved=baseSaveRecord(r,editing);if(saved.status==='completed'&&saved.scheduledId)delete state.sessionEvents[saved.scheduledId];return saved;}
function confirmPlanDraft(){if(!draftPlan)return false;upgradeProfile(state);if(state.plan&&!state.planHistory.some(p=>p.id===state.plan.id)){if(state.planHistory.length>=200){document.querySelector('#planmsg').textContent='历史计划已达200份，请先导出备份；本次未覆盖原计划。';return false;}state.planHistory.push(copy(state.plan));}state.plan=draftPlan;return true;}
function mergeProfile(incoming){if(!validProfile(incoming))throw Error('档案内容或状态不匹配。');incoming=upgradeProfile(copy(incoming));const old=root.profiles.find(p=>p.id===incoming.id);if(!old)return baseMergeProfile(incoming);upgradeProfile(old);const history=new Map();for(const p of [...incoming.planHistory,...old.planHistory])history.set(p.id,p);const active=old.plan||incoming.plan;if(incoming.plan&&old.plan&&incoming.plan.id!==old.plan.id)history.set(incoming.plan.id,incoming.plan);if(active)history.delete(active.id);const events={...incoming.sessionEvents,...old.sessionEvents};if(history.size>200||Object.keys(events).length>1000)throw Error('合并后的历史计划或状态超出上限。');const id=baseMergeProfile(incoming);old.planHistory=[...history.values()];old.sessionEvents=events;return id;}
function hasDraftValues(r){return !!(r.execution||r.note?.trim()||r.pain==='some'||r.quality==='poor'||r.minutes!=null||r.exercises.some(e=>e.sets.some(s=>s.weight!==null||s.reps!==null||s.rir!==null)));}
function entryStatus(p,id,today=localDate()){const logs=p.logs.filter(r=>r.scheduledId===id);if(logs.some(r=>r.status==='completed'&&r.date<=today))return 'completed';if(p.sessionEvents?.[id]?.status==='skipped')return 'skipped';if(logs.some(r=>r.status==='in_progress')||Object.values(p.drafts).some(r=>r.scheduledId===id&&hasDraftValues(r)))return 'in_progress';if(logs.some(r=>r.status==='unconfirmed'||r.status==='completed'&&r.date>today))return 'unconfirmed';return 'pending';}
function skipSession(id,reason){if(!plannedSession(id))throw Error('训练安排不存在。');if(state.logs.some(r=>r.scheduledId===id&&r.status==='completed'))throw Error('已有已结束记录，请先编辑该记录状态，不能直接标跳过。');if(!reason.trim())throw Error('请填写跳过原因。');if(reason.length>300)throw Error('原因不能超过300字。');if(!Object.hasOwn(state.sessionEvents,id)&&Object.keys(state.sessionEvents).length>=1000)throw Error('状态记录已达上限。');state.sessionEvents[id]={status:'skipped',reason:reason.trim(),date:localDate()};persist();}
function mondayOf(s){return addDays(s,-((new Date(s+'T12:00:00').getDay()+6)%7));}
function weekStats(p,start,planId=null,today=localDate()){const end=addDays(start,6),candidates=allPlans(p).filter(plan=>plan.schedule.some(e=>e.date>=start&&e.date<=end)),selected=candidates.find(p=>p.id===planId)||candidates.at(-1)||null,entries=selected?selected.schedule.filter(e=>e.date>=start&&e.date<=end).sort((a,b)=>a.date.localeCompare(b.date)):[],statuses=entries.map(e=>entryStatus(p,e.id,today)),records=p.logs.filter(r=>r.status==='completed'&&r.date>=start&&r.date<=end&&r.date<=today),timed=records.filter(r=>Number.isInteger(r.minutes)&&r.minutes>0),days=Array.from({length:7},(_,k)=>({date:addDays(start,k),strength:0,recovery:0}));for(const r of records)days[delta(r.date,start)][r.kind]++;return{start,end,candidates,selected,entries,statuses,planned:entries.length,ended:statuses.filter(s=>s==='completed').length,skipped:statuses.filter(s=>s==='skipped').length,progress:statuses.filter(s=>s==='in_progress').length,unconfirmed:statuses.filter(s=>s==='unconfirmed').length,actual:records.length,strength:records.filter(r=>r.kind==='strength').length,recovery:records.filter(r=>r.kind==='recovery').length,minutes:timed.reduce((a,r)=>a+r.minutes,0),timed:timed.length,drafts:Object.values(p.drafts).filter(hasDraftValues).length,days};}
let dashboardWeek=mondayOf(localDate()),dashboardPlanId=null,trendExercise=0;
const BOARD_STATUS={pending:'待开始',in_progress:'进行中',completed:'已结束',skipped:'已跳过',unconfirmed:'待确认'};
function statusField(r){return `<label>本次记录状态<select id="recordStatus">${Object.entries(RECORD_STATUS).filter(([key])=>key!=='unconfirmed'||r.status==='unconfirmed').map(([key,label])=>`<option value="${key}" ${r.status===key?'selected':''}>${label}</option>`).join('')}</select></label><p class="wide loghint">保存进行中记录不计入结束次数。选择“已结束”并保存表示本次训练已经结束，不表示全部计划组次都已完成；旧记录需要你确认状态后才计入。</p>`;}
function trendData(index){const lower=addDays(localDate(),-29);return state.logs.filter(r=>r.status==='completed'&&r.kind==='strength'&&r.date>=lower&&r.date<=localDate()).map(r=>({r,e:r.exercises.find(e=>e.index===index)})).filter(x=>x.e).sort((a,b)=>a.r.date.localeCompare(b.r.date)).slice(-8).map(({r,e})=>{const filled=e.sets.filter(s=>s.reps!==null&&(!r.execution||s.status==='completed')),weights=[...new Set(e.sets.filter(s=>s.weight!==null).map(s=>s.weight))],rir=e.sets.filter(s=>s.rir!==null).map(s=>s.rir);return{date:r.date,recordId:r.id,total:filled.reduce((a,s)=>a+s.reps,0),filled:filled.length,count:e.sets.length,weight:weights.length?weights.join(' / '):'未填',rir:rir.length?`${Math.min(...rir)}–${Math.max(...rir)}`:'未填'};}).filter(r=>r.filled>0);}
function trendChart(rows){if(rows.length<2)return '<p class="empty">至少两次已结束的同一动作的有效记录后，再展示轨迹。没有数据时不填充示例值。</p>';const max=Math.max(1,...rows.map(r=>r.total)),points=rows.map((r,i)=>({x:38+i*270/(rows.length-1),y:132-r.total/max*95,...r}));return `<svg class="trendchart" viewBox="0 0 340 174" role="img" aria-label="最近30天该动作已记录总次数，按日期排列"><line x1="38" y1="132" x2="310" y2="132" stroke="#59606b"/><line x1="38" y1="37" x2="310" y2="37" stroke="#363d47"/><text x="6" y="41">${max}次</text><text x="12" y="136">0</text><polyline points="${points.map(p=>p.x.toFixed(1)+','+p.y.toFixed(1)).join(' ')}" fill="none" stroke="#ff7d32" stroke-width="3"/>${points.map(p=>`<circle cx="${p.x}" cy="${p.y}" r="4" fill="#ff7d32"><title>${p.date}：已记${p.total}次，${p.filled}/${p.count}组有次数</title></circle>`).join('')}<text x="38" y="157">${rows[0].date.slice(5)}</text><text x="267" y="157">${rows.at(-1).date.slice(5)}</text></svg>`;}
function renderTrend(){const rows=trendData(trendExercise);document.querySelector('#trendContent').innerHTML=trendChart(rows)+`<div class="trendtable"><table><thead><tr><th>实际日期</th><th>已记次数／组</th><th>记录重量 kg</th><th>余力</th></tr></thead><tbody>${rows.map(r=>`<tr><td>${r.date.slice(5)}</td><td>${r.total}次 · ${r.filled}/${r.count}组</td><td>${r.weight}</td><td>${r.rir}</td></tr>`).join('')||'<tr><td colspan="4">暂无该动作已结束记录。</td></tr>'}</tbody></table></div><p class="loghint">仅显示实际填写的次数，不把空白组补成0。组数、器械、辅助程度或动作幅度不同会影响比较；曲线不自动判定变强，也不直接生成加重建议。</p>`;}
function renderDashboard(){upgradeProfile(state);const s=weekStats(state,dashboardWeek,dashboardPlanId);dashboardPlanId=s.selected?.id||null;const upcoming=allPlans().flatMap(p=>p.schedule.map(e=>({e,p,w:p.workouts.find(w=>w.key===e.workoutKey),status:entryStatus(state,e.id)}))).filter(x=>x.p.id===state.plan?.id&&!['completed','skipped'].includes(x.status)).sort((a,b)=>a.e.date.localeCompare(b.e.date)),next=upcoming.find(x=>x.e.date===localDate())||upcoming.find(x=>x.e.date<localDate())||upcoming[0],unknown=state.logs.filter(r=>r.status==='unconfirmed').length,issues=profileProblems(state.info);main.innerHTML=`<section class="dashboard">${finishedOwner===state.id?finishedSummaryMarkup(state.logs.find(r=>r.id===finishedRecordId)):""}${todayFocusMarkup(next)}<div class="boardhead"><div><div class="eyebrow">TRAINING OVERVIEW / ${esc(state.info.name)}</div><h2>本周训练总览</h2><p class="loghint">先看计划执行，再决定下一步。所有数字仅来自当前档案。</p></div><label class="weekpick">统计周<input id="boardWeek" type="date" value="${dashboardWeek}"></label></div><div class="boardfilters"><span>${s.start} — ${s.end}</span><label>计划口径<select id="boardPlan" ${s.candidates.length?'':'disabled'}>${s.candidates.length?s.candidates.map(p=>`<option value="${p.id}" ${p.id===dashboardPlanId?'selected':''}>${esc(p.label)} · ${p.start}${p.id===state.plan?.id?'（当前）':'（历史）'}</option>`).join(''):'<option>本周没有已确认安排</option>'}</select></label>${state.plan?'<button class="secondary" id="viewPlanWeek">查看当前计划周</button>':''}</div><div class="scorestrip"><section><span>所选计划已结束</span><b>${s.ended}<small> / ${s.planned}</small></b><p>${s.planned?Math.round(s.ended/s.planned*100)+'%计划结束率':'本周未安排，不计算比例'}</p></section><section><span>本周实际结束</span><b>${s.actual}<small> 次</small></b><p>力量${s.strength}次 · 恢复${s.recovery}次</p></section><section><span>本周已记录时长</span><b>${s.timed?s.minutes:'—'}<small> min</small></b><p>${s.timed}/${s.actual}条结束记录填写了时长</p></section><section><span>待提交草稿</span><b>${s.drafts}<small> 份</small></b><p>本档案全部日期 · 不计作已结束</p></section></div>${unknown?`<p class="notice">有${unknown}条旧记录待确认状态。<button class="textbutton" onclick="setTab('log')">检查记录</button></p>`:''}${issues.length?`<p class="loghint">资料提醒：${issues.map(esc).join(' ')}</p>`:''}${dashboardSetProgress(s)}<div class="boardgrid"><section class="agenda"><div class="paneltitle"><h2>本周训练安排</h2><span>进行中${s.progress} · 跳过${s.skipped}</span></div>${s.entries.map(e=>{const w=s.selected.workouts.find(w=>w.key===e.workoutKey),status=entryStatus(state,e.id);return `<div class="agendarow"><div class="agendadate"><b>${e.date.slice(5)}</b><span>${WEEK[new Date(e.date+'T12:00:00').getDay()]}</span></div><div><strong>${esc(w.title)}</strong><small>${w.kind==='strength'?w.moves.length+'个动作':'恢复与轻活动'} · <span class="status ${status}">${BOARD_STATUS[status]}</span></small>${status==='skipped'?`<small>原因：${esc(state.sessionEvents[e.id].reason)}</small>`:''}</div><div class="agendaactions"><button class="secondary" data-session="${e.id}">${status==='completed'||status==='unconfirmed'?'查看记录':'进入训练'}</button>${status==='skipped'?`<button class="textbutton" data-reset="${e.id}">恢复安排</button>`:status!=='completed'?`<button class="textbutton" data-skip="${e.id}">标记跳过</button>`:''}</div></div>`}).join('')||'<p class="empty">本周没有安排。先建档生成计划，或选择已有计划所在的统计周。</p>'}<div id="skipForm"></div><p id="boardmsg" role="status" class="loghint">计划结束率只统计所选计划落在本周的安排；实际次数按记录日期统计。不同版本计划不相加。</p></section><section class="activitypanel"><div class="paneltitle"><h2>本周实际活动</h2><span>仅计已结束记录</span></div><div class="activitybars">${s.days.map(d=>{const n=d.strength+d.recovery,max=Math.max(1,...s.days.map(d=>d.strength+d.recovery));return `<div><span>${n}</span><div class="bartrack"><i style="height:${d.recovery/max*90}px" class="recoverybar"></i><i style="height:${d.strength/max*90}px" class="strengthbar"></i></div><small>${WEEK[new Date(d.date+'T12:00:00').getDay()].slice(1)}</small></div>`}).join('')}</div><p class="loghint"><span class="legend strengthbar"></span>力量 <span class="legend recoverybar"></span>恢复。无数据时保留空列，不填演示数据。</p></section><section class="trendpanel"><div class="paneltitle"><h2>动作表现轨迹</h2><span>最近30天 · 最多8次</span></div><select id="trendSelect" aria-label="选择趋势动作">${DATA.items.map((e,i)=>`<option value="${i}" ${i===trendExercise?'selected':''}>${e.name}</option>`).join('')}</select><div id="trendContent"></div></section><section class="recentpanel"><div class="paneltitle"><h2>近期记录</h2><button class="textbutton" onclick="setTab('log')">全部记录 →</button></div>${state.logs.slice().sort((a,b)=>b.date.localeCompare(a.date)).slice(0,5).map(r=>`<div class="loghistory"><span>${r.date} · ${esc(r.workoutTitle)} <small class="status ${r.status}">${RECORD_STATUS[r.status]}</small></span><button class="secondary" data-record="${r.id}">查看／编辑</button></div>`).join('')||'<p class="empty">还没有实际记录。</p>'}</section></div></section>`;document.querySelector('#boardWeek').onchange=e=>{if(validDate(e.target.value)){dashboardWeek=mondayOf(e.target.value);dashboardPlanId=null;renderDashboard()}};document.querySelector('#boardPlan').onchange=e=>{dashboardPlanId=e.target.value;renderDashboard()};document.querySelector('#viewPlanWeek')?.addEventListener('click',()=>{dashboardWeek=mondayOf(state.plan.start);dashboardPlanId=state.plan.id;renderDashboard()});bindTodayFocus(next);document.querySelector('#dismissSummary')?.addEventListener('click',()=>{finishedRecordId=null;finishedOwner=null;renderDashboard()});document.querySelector('#summaryRecord')?.addEventListener('click',()=>{const id=finishedRecordId;setTab('log');viewRecord(id);document.querySelector('#historydetail').scrollIntoView({block:'start'})});document.querySelectorAll('[data-session]').forEach(b=>b.onclick=()=>{const old=state.logs.find(r=>r.scheduledId===b.dataset.session);if(old&&old.status!=='in_progress')openEditor(old.id);else beginRun(b.dataset.session)});document.querySelectorAll('[data-record]').forEach(b=>b.onclick=()=>openEditor(b.dataset.record));document.querySelectorAll('[data-reset]').forEach(b=>b.onclick=()=>{delete state.sessionEvents[b.dataset.reset];persist();renderDashboard()});document.querySelectorAll('[data-skip]').forEach(b=>b.onclick=()=>{document.querySelector('#skipForm').innerHTML='<label class="skipreason">跳过原因（不会删除已有记录）<input id="skipReason" maxlength="300" placeholder="例如：临时加班，改期后再练"></label><button class="secondary" id="confirmSkip">确认跳过</button>';document.querySelector('#confirmSkip').onclick=()=>{try{skipSession(b.dataset.skip,document.querySelector('#skipReason').value);renderDashboard()}catch(err){document.querySelector('#boardmsg').textContent=err.message}}});document.querySelector('#trendSelect').onchange=e=>{trendExercise=+e.target.value;renderTrend()};renderTrend();}

for(const profile of root.profiles)upgradeProfile(profile);
// Optional V5.2 fields leave earlier records readable without inventing completion.
function validRecord(r,id=true){if(!v51ValidRecord(r,id))return false;if(r.session!==undefined&&!validSession(r))return false;const status=s=>s===undefined||['pending','completed','skipped'].includes(s);if(!r.exercises.every(e=>e.sets.every(s=>status(s.status)&&(!(s.status==='completed')||s.reps>0))))return false;if(r.execution===undefined)return true;const x=r.execution,stamp=n=>n===null||Number.isFinite(n)&&n>=0&&n<=8640000000000000,txt=(s,n=300)=>typeof s==='string'&&s.length<=n;
return !!(x&&x.version===1&&['warmup','main','cooldown','summary'].includes(x.phase)&&Number.isInteger(x.selected)&&x.selected>=0&&x.selected<Math.max(1,r.exercises.length)&&stamp(x.startedAt)&&stamp(x.clockStartedAt)&&stamp(x.endedAt)&&Number.isFinite(x.elapsedMs)&&x.elapsedMs>=0&&x.elapsedMs<=864000000&&txt(x.endReason)&&x.routines&&['warmup','cooldown'].every(k=>Array.isArray(x.routines[k])&&x.routines[k].length<=12&&x.routines[k].every(q=>q&&txt(q.id,100)&&txt(q.title,100)&&txt(q.target,100)&&txt(q.help,1200)&&Number.isInteger(q.seconds)&&q.seconds>=0&&q.seconds<=1200&&['pending','completed','skipped'].includes(q.status)&&txt(q.note)))&&Array.isArray(x.actions)&&x.actions.length===r.exercises.length&&x.actions.every((a,i)=>a&&a.index===r.exercises[i].index&&stamp(a.startedAt)&&typeof a.finished==='boolean'&&txt(a.note)&&txt(a.reason)&&Array.isArray(a.warmupSets)&&a.warmupSets.length<=5&&a.warmupSets.every(s=>s&&(s.weight===null||Number.isFinite(s.weight)&&s.weight>=0&&s.weight<=1000)&&(s.reps===null||Number.isInteger(s.reps)&&s.reps>=0&&s.reps<=200)&&status(s.status)&&(s.status!=='completed'||s.reps>0)))&&(x.timer===null||x.timer&&['running','paused','done'].includes(x.timer.state)&&txt(x.timer.label,100)&&stamp(x.timer.endAt)&&(x.timer.state!=='running'||x.timer.endAt!==null)&&Number.isFinite(x.timer.remainingMs)&&x.timer.remainingMs>=0&&x.timer.remainingMs<=3600000));}
function validRoutineSnapshot(v){return v&&['warmup','cooldown'].every(k=>Array.isArray(v[k])&&v[k].length<=12&&v[k].every(s=>s&&typeof s.id==='string'&&s.id.length<=100&&typeof s.title==='string'&&s.title.length<=100&&typeof s.target==='string'&&s.target.length<=100&&typeof s.help==='string'&&s.help.length<=1200&&Number.isInteger(s.seconds)&&s.seconds>=0&&s.seconds<=1200&&['pending','completed','skipped'].includes(s.status)&&typeof s.note==='string'&&s.note.length<=300));}
function validWorkout(w){return v51ValidWorkout(w)&&(w.routines===undefined||validRoutineSnapshot(w.routines));}
function buildDraft(c){const p=v51BuildDraft(c);for(const w of p.workouts)w.routines=routineFor(w);return p;}
function routineStep(id,title,target,help,seconds){return{id,title,target,help,seconds,status:'pending',note:''};}
function routineFor(w){if(w.routines)return copy(w.routines);const step=routineStep,upper=w.pattern==='upper'||w.pattern==='full',lower=w.pattern==='lower'||w.pattern==='full';const warmup=[step('easy','轻松步行／原地踏步','5分钟起，可延长至10分钟','小步、自然呼吸，逐渐进入活动状态，以能轻松交谈为参考。',300)],cooldown=[step('slow','缓慢步行与呼吸整理','5分钟起，按需要延长','逐渐放慢，不憋气；待呼吸平稳后再选择拉伸。',300)];
if(upper){warmup.push(step('shoulder','肩部绕环与手臂小幅画圈','前后各5–10次','双脚站稳，肩部缓慢向上、向后、向下绕环；手臂从小圈开始，在舒适范围内活动，不耸肩或甩动。',0));cooldown.push(step('chest','胸部轻拉伸（可选）','每侧20秒，1轮','站在门框旁，前臂轻靠门框、手肘略低于肩；身体轻转向另一侧，只到轻微牵拉感。不压肩，不追求幅度。',20),step('back','上背部轻拉伸（可选）','20秒，1轮','站稳，双手在胸前交握，向前轻伸，肩胛自然分开；保持呼吸，不用力低头或弓腰。',20));}
if(lower){warmup.push(step('ankle','踝关节活动','每侧缓慢5–10圈','扶稳支撑，抬起一只脚，脚踝小幅画圈，再换侧；保持膝髋稳定。',0),step('squat','徒手蹲与髋铰链演练','各5–8次','徒手蹲只到能控制的深度，膝盖随脚尖方向；髋铰链时膝微屈、臀向后，背部保持自然。不要弹震或追求极限幅度。',0));cooldown.push(step('quad','股四头肌轻拉伸（可选）','每侧20秒，1轮','单手扶稳，另一手轻扶同侧脚踝，脚跟靠近臀部；两膝靠近、腰不后仰。够不到时可跳过，不强拉。',20),step('calf','小腿轻拉伸（可选）','每侧20秒，1轮','双手扶墙，一脚后撤，后脚脚跟轻贴地，脚尖朝前；重心缓慢前移，保持膝与脚方向一致。',20));}
if(w.kind==='strength')warmup.push(step('specific','主要动作的专项热身组','正式动作前单独记录准备组','在正式训练页的“热身组”区域记录。先用徒手、空杆或轻阻力熟悉动作，再按感觉逐步增加；不练到疲劳，不自动推算重量。',0));
return{warmup,cooldown};}
function routinePreview(w){const r=routineFor(w);return `<details class="routinepreview"><summary>本课热身与结束整理</summary><div class="routinecolumns">${['warmup','cooldown'].map(k=>`<section><h3>${k==='warmup'?'训练前热身':'训练后整理 / 可选拉伸'}</h3>${r[k].map(s=>`<p><strong>${esc(s.title)}</strong> · ${esc(s.target)}<br><small>${esc(s.help)}</small></p>`).join('')}</section>`).join('')}</div><p class="loghint">动态活动按舒适范围进行；拉伸不弹震、不憋气，出现疼痛停止。内容为通用模板，随本次执行记录保存快照。<a href="https://www.heart.org/en/healthy-living/exercise-and-physical-activity/fitness-basics/warm-up-cool-down" target="_blank" rel="noopener">AHA 热身与整理原则</a> · <a href="https://www.acefitness.org/resources/everyone/blog/5779/the-common-mistakes-people-make-when-warming-up/" target="_blank" rel="noopener">ACE 动态热身原则</a></p></details>`;}
let runKey=null,runOwner=null,runTick=null,runNotice='',runSound=false,runAudio=null;
let finishedRecordId=null,finishedOwner=null;
function attachExecution(r){if(r.execution){if(r.execution.endedAt!==null){r.execution.endedAt=null;r.execution.phase='main';r.execution.clockStartedAt=Date.now();r.status='in_progress';}return r;}const p=allPlans().find(p=>p.id===r.planId),w=p?.workouts.find(w=>w.key===r.workoutKey)||{pattern:r.kind==='recovery'?'recovery':'full',kind:r.kind};r.execution={version:1,phase:'warmup',selected:0,startedAt:Date.now(),clockStartedAt:Date.now(),elapsedMs:0,endedAt:null,endReason:'',timer:null,routines:routineFor(w),actions:r.exercises.map(e=>({index:e.index,startedAt:null,finished:false,note:'',reason:'',warmupSets:[]}))};for(const e of r.exercises)for(const s of e.sets)s.status??='pending';r.status='in_progress';return r;}
function runRecord(){return runOwner===state.id?state.drafts[runKey]:null;}
function executionElapsed(r,now=Date.now()){const x=r.execution;return x.elapsedMs+(x.clockStartedAt===null?0:Math.max(0,now-x.clockStartedAt));}
function pauseExecution(r,now=Date.now()){const x=r.execution;if(x.clockStartedAt!==null){x.elapsedMs=Math.min(864000000,executionElapsed(r,now));x.clockStartedAt=null;}}
function runPersist(){const r=runRecord();if(!r||!validRecord(r,false))throw Error('执行数据有无效数值，本次修改尚未保存。');const saved=persist();runNotice=saved?'进度已自动保存':'浏览器保存失败，进度仅在页面内，请立即导出备份。';return saved;}
/* ---------- 第二批：当天时间不足（单次精简） ---------- */
// 仅上下肢分化课；逐课明确删除清单，其余动作保留。入门全身课、恢复课、历史模板不在此表。
const TRIM_RULES={
  ua:{drop:[4,5,22],note:'删除侧平举与弯举'},
  la:{drop:[9],note:'删除腿弯举'},
  ub:{drop:[15,16],note:'删除反向飞鸟与绳索下压'},
  lb:{drop:[9],note:'删除腿弯举'}
};
let trimId=null,trimReturnTab='dashboard';

function trimSession(w){
  const rule=w&&TRIM_RULES[w.key];
  if(!rule)return null;
  const dropSet=new Set(rule.drop),keep=[],drop=[];
  for(const [index,target] of w.moves||[]){
    const item={index,target,sets:parseSets(target).count,name:DATA.items[index].name};
    if(dropSet.has(index))drop.push({...item,role:'isolation'});else keep.push(item);
  }
  if(!drop.length||!keep.length)return null;
  const sets=a=>a.reduce((n,x)=>n+x.sets,0);
  return {key:w.key,title:w.title,rule,keep,drop,keptSets:sets(keep),droppedSets:sets(drop),original:{exercises:(w.moves||[]).length,sets:sets(keep)+sets(drop)}};
}

function trimEligible(id){
  if(!id)return false;
  const x=plannedSession(id);
  if(!x||x.w.kind!=='strength')return false;
  if(state.plan?.template!=='upper-lower')return false;
  if(!TRIM_RULES[x.w.key])return false;
  const snap=state.plan.profileSnapshot;
  if(!snap||!validInfo(snap)||snap.recovery==='low')return false;
  if(x.e.date!==localDate())return false;
  if(state.logs.some(r=>r.scheduledId===id))return false;
  if(Object.values(state.drafts).some(r=>r.scheduledId===id))return false;
  if(entryStatus(state,id)!=='pending')return false;
  return !!trimSession(x.w);
}

function openTrimPreview(id){
  if(!trimEligible(id)){
    const box=document.querySelector('#boardmsg,#schedulemsg');
    const msg='当前课程不满足精简条件：仅当天、未开始、无相关草稿的上下肢分化力量课可用。';
    if(box)box.textContent=msg;else alert(msg);
    return;
  }
  trimId=id;trimReturnTab=tab==='plan'?'plan':'dashboard';tab='trim';detail=false;render();window.scrollTo({top:0,behavior:'instant'});
}

function trimRow(x,extra=''){
  return `<div class="trimrow"><span>${esc(x.name)}</span><strong class="numeric">${x.sets}组</strong><small>${esc(x.target)}${extra}</small></div>`;
}

function renderTrim(){
  const x=plannedSession(trimId);
  const plan=x&&trimEligible(trimId)?trimSession(x.w):null;
  if(!plan){
    main.innerHTML=`<section class="planner"><div class="eyebrow">TRIM / 本次安排</div><h1>精简本次训练</h1><p class="notice">当前课程已不满足精简条件（可能已开始、已结束或日期已变）。请返回后按原计划继续。</p><div class="planactions"><button class="secondary" id="cancelTrim">返回</button></div></section>`;
    document.querySelector('#cancelTrim').onclick=()=>setTab(trimReturnTab,true);
    return;
  }
  main.innerHTML=`<section class="planner trimview"><div class="eyebrow">TRIM / ${esc(x.e.date)}</div><h1>精简本次训练</h1><p class="loghint">${esc(state.info.name)} · ${esc(plan.title)} · 仅影响本次，不改长期计划与历史记录。</p><p class="notice">本次保留 ${plan.keep.length} 个动作 / ${plan.keptSets} 组；原计划 ${plan.original.exercises} 个动作 / ${plan.original.sets} 组。少 ${plan.drop.length} 个动作 / ${plan.droppedSets} 组。不预估完成分钟数。</p><div class="trimcolumns"><section><h3>保留</h3>${plan.keep.map(k=>trimRow(k)).join('')}</section><section><h3>删除</h3>${plan.drop.map(d=>trimRow(d,' · 单关节辅助')).join('')}</section></div><p class="loghint">删除的是单关节辅助动作，不表示与保留动作等效；热身与整理保持不变。</p><p class="loghint">开始后从本次草稿继续；本批不支持开始后重新选择精简方案。</p><p id="trimerr" class="notice" role="status"></p><div class="planactions"><button class="action" id="startTrim">按精简方案开始</button><button class="secondary" id="cancelTrim">取消</button></div></section>`;
  document.querySelector('#cancelTrim').onclick=()=>setTab(trimReturnTab,true);
  document.querySelector('#startTrim').onclick=()=>startTrimmedRun(trimId);
}

function startTrimmedRun(id){
  try{
    if(!trimEligible(id))throw Error('当前课程不满足精简条件，请返回后按原计划开始。');
    const x=plannedSession(id),plan=trimSession(x.w);
    if(!plan)throw Error('本课没有可用的精简方案。');
    const date=localDate(),key=recordKey(date,x.w.key,null);
    if(state.drafts[key])throw Error('今天同名训练课已有草稿，请先继续或结束它。');
    if(Object.keys(state.drafts).length>=100)throw Error('草稿已达100份，请先提交或导出已有草稿。');
    const r=newRecord(id,x.w.key,date);
    const keep=new Set(plan.keep.map(k=>k.index));
    r.exercises=r.exercises.filter(e=>keep.has(e.index));
    if(r.exercises.length!==plan.keep.length)throw Error('计划动作与精简清单不一致，已停止。');
    r.session={kind:'trim',tier:'short',appliedAt:Date.now(),planId:state.plan.id,workoutKey:x.w.key,scheduledId:id,original:{exercises:plan.original.exercises,sets:plan.original.sets},dropped:plan.drop.map(d=>({index:d.index,target:d.target,role:'isolation'}))};
    attachExecution(r);
    state.drafts[key]=r;runKey=key;runOwner=state.id;
    runNotice='已按精简方案开始：本次 '+plan.keptSets+' 组（原计划 '+plan.original.sets+' 组，未安排 '+plan.droppedSets+' 组）。';
    runPersist();tab='execute';render();window.scrollTo({top:0,behavior:'instant'});
  }catch(err){
    const box=document.querySelector('#trimerr');
    if(box)box.textContent=err.message;else alert(err.message);
  }
}

/* ---------- 第三批：器械替代（首版只批准 11 → 12） ---------- */
// 已批准关系只有一条：杠铃卧推 11 → 中立握哑铃卧推 12，仅用于 ub。
// C2–C5（1→23、13→23、3→25、6→24）仍是候选，不写入本表，也不得作为可用规则出现。
const SWAP_RULES={11:{to:12,tier:'variant',reason:'barbell_unavailable'}};
let swapId=null,swapReturnTab='dashboard';

// 复用项目已有的 bench=12 变体规则：沿用组数，次数区间改写为 6–8。
function swapTargetFor(fromTarget){
  return parseSets(fromTarget).count+' × 6–8';
}

function swapOptions(w){
  if(!w||w.key!=='ub'||state.plan?.template!=='upper-lower')return [];
  const out=[];
  for(const [index,target] of w.moves||[]){
    const rule=SWAP_RULES[index];
    if(!rule)continue;
    const fromNeed=REQUIREMENTS[index]||[],toNeed=REQUIREMENTS[rule.to]||[];
    out.push({from:index,to:rule.to,tier:rule.tier,reason:rule.reason,
      fromTarget:target,target:swapTargetFor(target),fromNeed,toNeed,
      missing:toNeed.filter(k=>!state.info.equipment.includes(k))});
  }
  return out;
}

function swapRelevant(id){
  if(!id)return false;
  const x=plannedSession(id);
  if(!x||x.w.kind!=='strength')return false;
  if(state.plan?.template!=='upper-lower'||x.w.key!=='ub')return false;
  if(x.e.date!==localDate())return false;
  if(state.logs.some(r=>r.scheduledId===id))return false;
  if(Object.values(state.drafts).some(r=>r.scheduledId===id))return false;
  if(entryStatus(state,id)!=='pending')return false;
  return (x.w.moves||[]).some(([i])=>SWAP_RULES[i]);
}
function swapEligible(id){
  if(!swapRelevant(id))return false;
  return swapOptions(plannedSession(id).w).some(o=>!o.missing.length);
}

// 记录层读取：替换信息只来自记录自身，不依赖当前计划是否存在。
function swappedInfo(r){
  const s=r?.session;
  if(s?.kind!=='swap'||!Array.isArray(s.swaps)||s.swaps.length!==1)return null;
  const w=s.swaps[0];
  if(!w||!Number.isInteger(w.from)||!Number.isInteger(w.to))return null;
  return {from:w.from,to:w.to,fromTarget:w.fromTarget,target:w.target,reason:w.reason,
    fromName:DATA.items[w.from]?.name||('#'+w.from),toName:DATA.items[w.to]?.name||('#'+w.to),
    planned:validTarget(w.fromTarget)?parseSets(w.fromTarget).count:0,
    sub:(r.exercises||[]).find(e=>e.index===w.to)||null};
}
function sessionLabel(r){
  const k=r?.session?.kind;
  return k==='trim'?' · 精简':k==='swap'?' · 替换':'';
}
// 三层口径：本次完成、按原动作完成、按替代动作完成；原动作未执行组数单列。
function swapStats(r){
  const sw=swappedInfo(r);
  if(!sw)return null;
  const done=e=>e?e.sets.filter(s=>s.status==='completed').length:0;
  const bySwap=done(sw.sub);
  const byOriginal=(r.exercises||[]).filter(e=>e.index!==sw.to).reduce((n,e)=>n+done(e),0);
  const total=(r.exercises||[]).reduce((n,e)=>n+e.sets.length,0);
  return {sw,bySwap,byOriginal,done:bySwap+byOriginal,planned:sw.planned,unexecuted:sw.planned,total};
}
// 替代动作的组状态分布：完成 / 跳过 / 未处理（未处理不并入跳过）。
function swapSetCounts(r){
  const sw=swappedInfo(r);
  if(!sw)return null;
  const sets=(sw.sub&&sw.sub.sets)||[];
  const planned=sets.length||sw.planned;
  const done=sets.filter(s=>s.status==='completed').length;
  const skipped=sets.filter(s=>s.status==='skipped').length;
  return {sw,planned,done,skipped,pending:Math.max(0,planned-done-skipped)};
}
// 统一口径：原定组数 → 本次是否执行 → 改用哪个动作 → 替代完成组数 → 跳过与未处理。
function swapSentence(c){
  return c.sw.fromName+'：原定 '+c.planned+' 组，本次未执行，改用 '+c.sw.toName+'；替代动作完成 '+c.done+'/'+c.planned+' 组（跳过 '+c.skipped+' · 未处理 '+c.pending+'）。';
}
function swapSummaryMarkup(r){
  const st=swapStats(r),c=swapSetCounts(r);
  if(!st||!c)return '';
  return `<p class="swapsummary">本次替换安排：原计划 ${r.session.original.sets} 组 / 本次 ${st.total} 组（替换不改组数）。本次实际完成 ${st.done} 组：其余动作（未被替换）完成 ${st.byOriginal} 组，替代动作完成 ${st.bySwap} 组。<br>${esc(swapSentence(c))}替代动作重量按每只哑铃记录（${esc(st.sw.target)}）。</p>`;
}
function swapNoteMarkup(r){
  const c=swapSetCounts(r);
  if(!c)return '';
  return `<p class="swapnote">本次为替换安排：${esc(swapSentence(c))}原动作不计为已执行；替代动作的重量按<b>每只哑铃</b>填写，需重新确认，不沿用原动作或历史重量。</p>`;
}
function swapReviewMarkup(r){
  const c=swapSetCounts(r);
  if(!c)return '';
  return `<p>本次为替换安排：${esc(swapSentence(c))}重量按每只哑铃记录，不与原动作或历史重量比较。</p>`;
}
function swapDashNote(records){
  const list=(records||[]).filter(r=>r.session?.kind==='swap'&&swappedInfo(r));
  if(!list.length)return '';
  const planned=list.reduce((x,r)=>x+(swapSetCounts(r)?.planned||0),0);
  const done=list.reduce((x,r)=>x+(swapSetCounts(r)?.done||0),0);
  return `；其中 ${list.length} 次替换训练：原定 ${planned} 组未按原动作执行，改由替代动作完成 ${done} 组`;
}

function openSwapPreview(id){
  if(!swapRelevant(id)){
    const box=document.querySelector('#boardmsg,#schedulemsg');
    const msg='当前课程不满足替换条件：仅当天、未开始、无相关草稿的上肢 B 力量课可用。';
    if(box)box.textContent=msg;else alert(msg);
    return;
  }
  swapId=id;swapReturnTab=tab==='plan'?'plan':'dashboard';tab='swap';detail=false;render();window.scrollTo({top:0,behavior:'instant'});
}

function swapRow(name,target,need){
  return `<div class="swaprow"><span>${esc(name)}</span><strong class="numeric">${esc(target)}</strong><small>器械：${esc(need)}</small></div>`;
}

function renderSwap(){
  const x=plannedSession(swapId);
  if(!swapRelevant(swapId)){
    main.innerHTML=`<section class="planner swapview"><div class="eyebrow">SWAP / 本次安排</div><h1>替换本次动作</h1><p class="notice">当前课程已不满足替换条件（可能已开始、已结束或日期已变）。请返回后按原计划继续；如需调整，可考虑精简方案或改期。</p><div class="planactions"><button class="secondary" id="cancelSwap">返回</button></div></section>`;
    document.querySelector('#cancelSwap').onclick=()=>setTab(swapReturnTab,true);
    return;
  }
  const options=swapOptions(x.w), usable=options.find(o=>!o.missing.length)||null;
  if(!usable){
    const need=(options[0]?.toNeed||[]).map(k=>EQ[k]).join('、')||'哑铃、训练凳';
    const miss=(options[0]?.missing||[]).map(k=>EQ[k]).join('、')||'哑铃或训练凳';
    main.innerHTML=`<section class="planner swapview"><div class="eyebrow">SWAP / ${esc(x.e.date)}</div><h1>替换本次动作</h1><p class="loghint">${esc(state.info.name)} · ${esc(x.w.title)} · 仅影响本次，不改长期计划与历史记录。</p><p class="notice">原因：杠铃位不可用。</p><p class="notice err">暂无合适替代：本方案仍需要「${esc(need)}」，而你的档案器械条件缺少「${esc(miss)}」。本批不提供其他替代动作，也不修改你的长期器械资料。可返回后按原计划安排，或使用精简方案。</p><div class="planactions"><button class="secondary" id="cancelSwap">返回</button></div></section>`;
    document.querySelector('#cancelSwap').onclick=()=>setTab(swapReturnTab,true);
    return;
  }
  const fromNeed=usable.fromNeed.map(k=>EQ[k]).join('、'),toNeed=usable.toNeed.map(k=>EQ[k]).join('、');
  const count=parseSets(usable.target).count;
  main.innerHTML=`<section class="planner swapview"><div class="eyebrow">SWAP / ${esc(x.e.date)}</div><h1>替换本次动作</h1><p class="loghint">${esc(state.info.name)} · ${esc(x.w.title)} · 仅影响本次，不改长期计划与历史记录。</p><p class="notice">原因：杠铃位不可用。替代动作仍需要「${esc(toNeed)}」；请在下方确认这两项今天实际可用。本页不会修改你的长期器械资料。</p><div class="swapcolumns"><section><h3>原动作（本次不执行）</h3>${swapRow(DATA.items[usable.from].name,usable.fromTarget,fromNeed)}</section><section><h3>替代动作</h3>${swapRow(DATA.items[usable.to].name,usable.target,toNeed)}</section></div><dl class="swapdiff"><div><dt>动作模式</dt><dd>同为水平推；原动作为杠铃联动，替代为双侧独立哑铃。</dd></div><div><dt>主要部位</dt><dd>胸肌、三角肌前束、肱三头肌（两者相同）。</dd></div><div><dt>稳定需求</dt><dd>替代动作要自己控制两只哑铃，躯干与肩部稳定要求更高。</dd></div><div><dt>握法</dt><dd>由正握杠铃改为中立握哑铃，肩部位置不同。</dd></div><div><dt>组数</dt><dd>沿用 ${count} 组，与原动作相同。</dd></div><div><dt>次数</dt><dd>由「${esc(usable.fromTarget)}」改为「${esc(usable.target)}」：沿用项目已有的 bench=12 变体规则，次数区间发生变化，不是保持不变。</dd></div><div><dt>重量填写</dt><dd>按<b>每只哑铃</b>填写（两只各 20 kg 时记 20 kg）：初始重量、次数、余力都留空，不沿用原动作或历史重量，也不写成 0。本批不换算、不改写历史数据。</dd></div></dl><p class="loghint">替换不等于等效：器械、握法与稳定需求不同，不能把替代动作的表现直接当作原动作表现。</p><label class="checkchoice"><input type="checkbox" id="swapConfirm"> 我已确认今天「哑铃」与「训练凳」实际可用</label><p id="swaperr" class="notice" role="status"></p><div class="planactions"><button class="action" id="startSwap" disabled>按替换方案开始</button><button class="secondary" id="cancelSwap">取消</button></div><p class="loghint">开始后从本次草稿继续；本批不支持开始后再次更换，也不能与精简同时使用。</p></section>`;
  document.querySelector('#swapConfirm').onchange=e=>{document.querySelector('#startSwap').disabled=!e.target.checked;};
  document.querySelector('#cancelSwap').onclick=()=>setTab(swapReturnTab,true);
  document.querySelector('#startSwap').onclick=()=>startSwappedRun(swapId);
}

function startSwappedRun(id){
  try{
    if(!document.querySelector('#swapConfirm')?.checked)throw Error('请先确认今天「哑铃」与「训练凳」实际可用。');
    if(!swapEligible(id))throw Error('当前课程不满足替换条件（可能已开始、已结束、器械不足或日期已变）。');
    const x=plannedSession(id),opt=swapOptions(x.w).find(o=>!o.missing.length);
    if(!opt)throw Error('本课没有可用的替换方案。');
    const date=localDate(),key=recordKey(date,x.w.key,null);
    if(state.drafts[key])throw Error('今天同名训练课已有草稿，请先继续或结束它。');
    if(Object.keys(state.drafts).length>=100)throw Error('草稿已达100份，请先提交或导出已有草稿。');
    const r=newRecord(id,x.w.key,date);
    const at=r.exercises.findIndex(e=>e.index===opt.from);
    if(at<0)throw Error('计划中未找到原动作，已停止。');
    if(r.exercises.some((e,i)=>i!==at&&e.index===opt.to))throw Error('替代动作已在本次安排中，已停止。');
    r.exercises[at]={index:opt.to,target:opt.target,sets:Array.from({length:parseSets(opt.target).count},()=>({weight:null,reps:null,rir:null}))};
    r.session={kind:'swap',tier:opt.tier,appliedAt:Date.now(),planId:state.plan.id,workoutKey:x.w.key,scheduledId:id,
      original:{exercises:(x.w.moves||[]).length,sets:(x.w.moves||[]).reduce((n,[,t])=>n+parseSets(t).count,0)},
      swaps:[{from:opt.from,to:opt.to,fromTarget:opt.fromTarget,target:opt.target,reason:opt.reason}]};
    attachExecution(r);
    state.drafts[key]=r;runKey=key;runOwner=state.id;
    runNotice='已按替换方案开始：「'+swapOriginalName(opt.from)+'」→「'+DATA.items[opt.to].name+'」。重量需重新确认，未沿用原动作。';
    runPersist();tab='execute';render();window.scrollTo({top:0,behavior:'instant'});
  }catch(err){
    const box=document.querySelector('#swaperr');
    if(box)box.textContent=err.message;else alert(err.message);
  }
}
function swapOriginalName(from){return DATA.items[from]?.name||('#'+from);}

// 记录级校验：不依赖当前计划是否存在，只用记录自身与 session 对照。
function validSession(r){
  const s=r.session;
  if(!s||!Number.isFinite(s.appliedAt))return false;
  // 精简分支：保持原有校验，未做任何放宽。
  if(s.kind==='trim'){
    if(s.tier!=='short')return false;
    if(!s.scheduledId||s.planId!==r.planId||s.workoutKey!==r.workoutKey||s.scheduledId!==r.scheduledId)return false;
    if(!s.original||!Number.isInteger(s.original.exercises)||s.original.exercises<1||s.original.exercises>10)return false;
    if(!Number.isInteger(s.original.sets)||s.original.sets<1||s.original.sets>100)return false;
    if(!Array.isArray(s.dropped)||!s.dropped.length||s.dropped.length>10)return false;
    if(new Set(s.dropped.map(d=>d.index)).size!==s.dropped.length)return false;
    const kept=new Set(r.exercises.map(e=>e.index));
    if(s.dropped.some(d=>kept.has(d.index)))return false;
    if(!s.dropped.every(d=>d&&Number.isInteger(d.index)&&d.index>=0&&d.index<DATA.items.length&&validTarget(d.target)&&d.role==='isolation'))return false;
    if(s.original.exercises!==r.exercises.length+s.dropped.length)return false;
    const sum=a=>a.reduce((n,x)=>n+parseSets(x.target).count,0);
    if(s.original.sets!==sum(r.exercises)+sum(s.dropped))return false;
    if(r.execution&&(r.execution.actions.length!==r.exercises.length||r.execution.actions.some((a,i)=>a.index!==r.exercises[i].index)))return false;
    return true;
  }
  // 替换分支：首版只批准 11 → 12，且每次只允许一个动作。
  if(s.kind!=='swap')return false;
  if(s.tier!=='variant')return false;
  if(!s.scheduledId||s.planId!==r.planId||s.workoutKey!==r.workoutKey||s.scheduledId!==r.scheduledId)return false;
  if(s.workoutKey!=='ub')return false;
  if(!s.original||!Number.isInteger(s.original.exercises)||s.original.exercises<1||s.original.exercises>10)return false;
  if(!Number.isInteger(s.original.sets)||s.original.sets<1||s.original.sets>100)return false;
  if(!Array.isArray(s.swaps)||s.swaps.length!==1)return false;
  const w=s.swaps[0];
  if(!w||!Number.isInteger(w.from)||!Number.isInteger(w.to))return false;
  if(w.from!==11||w.to!==12)return false;
  if(w.reason!=='barbell_unavailable')return false;
  if(!validTarget(w.fromTarget)||!validTarget(w.target))return false;
  const fromQ=parseSets(w.fromTarget),toQ=parseSets(w.target);
  if(fromQ.count!==toQ.count)return false;
  if(toQ.low!==6||toQ.high!==8)return false;
  if((r.exercises||[]).some(e=>e.index===w.from))return false;
  const subs=(r.exercises||[]).filter(e=>e.index===w.to);
  if(subs.length!==1||subs[0].target!==w.target)return false;
  if(s.original.exercises!==r.exercises.length)return false;
  const total=a=>a.reduce((n,x)=>n+parseSets(x.target).count,0);
  if(s.original.sets!==total(r.exercises))return false;
  if(r.execution&&(r.execution.actions.length!==r.exercises.length||r.execution.actions.some((a,i)=>a.index!==r.exercises[i].index)))return false;
  return true;
}
function beginRun(id){try{const x=plannedSession(id);if(!x)throw Error('没有找到这节训练安排。');const old=state.logs.find(r=>r.scheduledId===id);if(old&&old.status!=='in_progress'){openEditor(old.id);return;}const drafts=Object.entries(state.drafts).find(([k,r])=>r.scheduledId===id&&(!old||k==='edit:'+old.id));const date=old?.date||localDate(),key=drafts?.[0]||recordKey(date,x.w.key,old?.id);if(!drafts&&state.drafts[key]&&state.drafts[key].scheduledId!==id)throw Error('今天同名训练课已有另一份草稿，请从训练记录恢复它，或先完成／备份后调整。');if(!state.drafts[key]&&Object.keys(state.drafts).length>=100)throw Error('草稿已达100份，请先提交或导出已有草稿。');const r=attachExecution(copy(drafts?.[1]||old||newRecord(id,x.w.key,date)));state.drafts[key]=r;runKey=key;runOwner=state.id;runNotice='';runPersist();tab='execute';render();window.scrollTo({top:0,behavior:'instant'});}catch(err){const box=document.querySelector('#boardmsg,#schedulemsg,#logmsg');if(box)box.textContent=err.message;else alert(err.message);}}
function resumeRun(key){const r=state.drafts[key];if(!r?.execution)return;if(key.startsWith('edit:')&&!state.logs.some(x=>x.id===key.slice(5))){alert('草稿对应的原记录不存在，请先导入完整备份。');return;}runKey=key;runOwner=state.id;runNotice='已恢复训练进度，计时按真实时间继续。';tab='execute';render();}
function actionState(r,i){const e=r.exercises[i],a=r.execution.actions[i],done=e.sets.filter(s=>s.status==='completed').length;if(e.sets.every(s=>s.status==='completed'))return 'completed';if(a.finished||r.execution.endedAt!==null)return done?'partial':'skipped';return a.startedAt?'in_progress':'pending';}
function setSummary(r){return {total:r.exercises.reduce((n,e)=>n+e.sets.length,0),completed:r.exercises.reduce((n,e)=>n+e.sets.filter(s=>s.status==='completed').length,0),skipped:r.exercises.reduce((n,e)=>n+e.sets.filter(s=>s.status==='skipped').length,0)};}
function remainingTimer(t,now=Date.now()){return !t?0:t.state==='running'?Math.max(0,t.endAt-now):t.remainingMs;}
function startTimer(seconds,label){const r=runRecord();r.execution.timer={state:'running',endAt:Date.now()+seconds*1000,remainingMs:seconds*1000,label};runPersist();}
function clockText(ms){const n=Math.ceil(Math.max(0,ms)/1000);return `${Math.floor(n/60).toString().padStart(2,'0')}:${(n%60).toString().padStart(2,'0')}`;}
function timerAction(action){const r=runRecord(),t=r.execution.timer;if(!t)return;if(action==='pause'&&t.state==='running'){t.remainingMs=remainingTimer(t);t.state='paused';t.endAt=null;}else if(action==='resume'&&t.state==='paused'){t.endAt=Date.now()+t.remainingMs;t.state='running';}else if(action==='extend'){const remaining=remainingTimer(t)+30000;t.remainingMs=Math.min(3600000,remaining);if(t.state!=='paused'){t.endAt=Date.now()+t.remainingMs;t.state='running';}}else if(action==='end'){t.state='done';t.remainingMs=0;t.endAt=null;}runPersist();renderExecute();}
function tickExecution(){const r=runRecord();if(!r||tab!=='execute')return;const t=r.execution.timer,node=document.querySelector('#timerClock');if(node)node.textContent=t?clockText(remainingTimer(t)):'—';const elapsed=document.querySelector('#sessionClock');if(elapsed)elapsed.textContent=clockText(executionElapsed(r));if(t?.state==='running'&&remainingTimer(t)===0){t.state='done';t.remainingMs=0;t.endAt=null;runPersist();if(runSound&&runAudio){try{const osc=runAudio.createOscillator(),gain=runAudio.createGain();gain.gain.value=.06;osc.connect(gain);gain.connect(runAudio.destination);osc.start();osc.stop(runAudio.currentTime+.25);}catch{}}renderExecute();}}
function restSeconds(i){const s=DATA.items[i].rest;return s.includes('2–3')?120:s.includes('60–90')?60:90;}
function executeGuard(fn){return ()=>{try{fn()}catch(err){runNotice=err.message;const n=document.querySelector('#runMessage');if(n)n.textContent=runNotice;}};}
function setRunField(obj,key,value){const previous=obj[key];obj[key]=value;if(!validRecord(runRecord(),false)){obj[key]=previous;throw Error('输入无效，尚未保存，请修正日期或数值。');}runPersist();}
function updateRunInput(input){const r=runRecord(),n=input.value===''?null:Number(input.value);if(!Number.isFinite(n)&&n!==null)throw Error('请输入有效数值。');const set=input.dataset.warm!==undefined?r.execution.actions[+input.dataset.ai].warmupSets[+input.dataset.warm]:r.exercises[+input.dataset.ai].sets[+input.dataset.si],field=input.dataset.value,limit=field==='weight'?1000:field==='rir'?10:200;if(n!==null&&(n<0||n>limit||field!=='weight'&&!Number.isInteger(n)))throw Error('数值超出范围或需要整数。');if(field==='reps'&&n===null&&set.status==='completed')throw Error('已完成组需要实际次数；先撤回完成状态再清空。');set[field]=n;runPersist();document.querySelector('#runMessage').textContent=runNotice;}
function validateRunInputs(){for(const input of document.querySelectorAll('.execution input[type="number"],.execution input[type="date"]'))if(!input.checkValidity())throw Error('请先修正页面中的日期或数值，再确认完成。');}
function markRunSet(i,j,status){
  validateRunInputs();
  const r=runRecord(),e=r.exercises[i],a=r.execution.actions[i],s=e.sets[j];
  if(status==='completed'&&!(s.reps>0))throw Error('完成本组前，请填写实际次数（至少1次）。');
  if(status==='completed')a.startedAt??=Date.now();
  s.status=status;a.finished=false;
  if(status==='completed'&&e.sets.some((q,k)=>k!==j&&q.status==='pending'))startTimer(restSeconds(e.index),DATA.items[e.index].name+' · 组间休息');
  runPersist();renderExecute();
  const next=document.querySelector('.current-set .paneltitle strong');
  if(next){next.focus({preventScroll:true});next.scrollIntoView({block:'nearest'});}
}
function finishAction(i,skipAll=false){validateRunInputs();const r=runRecord(),e=r.exercises[i],a=r.execution.actions[i];if(skipAll&&e.sets.some(s=>s.status==='completed'))throw Error('已有完成组，请使用“结束此动作”保留部分完成状态。');const needs=skipAll||e.sets.some(s=>s.status!=='completed');if(needs&&!a.reason.trim())throw Error('部分完成或跳过时，请填写原因。');if(skipAll||e.sets.some(s=>s.status==='pending'))for(const s of e.sets)if(s.status!=='completed')s.status='skipped';a.finished=true;runPersist();renderExecute();}
function routineMarkup(r,phase){return `<p class="loghint">按自己的节奏完成。倒计时到点只作提醒，完成或跳过需要你确认。</p>${r.execution.routines[phase].map((s,i)=>`<section class="runroutine"><div class="paneltitle"><h3>${esc(s.title)}</h3><span>${{pending:'未开始',completed:'已完成',skipped:'已跳过'}[s.status]}</span></div><p>${esc(s.target)}</p><p class="loghint">${esc(s.help)}</p><div class="runbuttons">${s.seconds?`<button class="secondary" data-routine-timer="${i}">开始${s.seconds}秒计时</button>`:''}<button class="secondary" data-routine="${i}" data-status="completed">标记完成</button><button class="secondary" data-routine="${i}" data-status="skipped">跳过</button><button class="textbutton" data-routine="${i}" data-status="pending">撤回</button></div><label>感受／跳过原因<input data-routine-note="${i}" maxlength="300" value="${esc(s.note)}" placeholder="跳过时填原因，完成后感受可选"></label></section>`).join('')}<button class="action" id="phaseNext">${phase==='warmup'?'进入正式训练 →':'查看结束汇总 →'}</button>`;}

function previousRunExercise(r,e){
  const editing=runOwner===state.id&&runKey?.startsWith('edit:')?runKey.slice(5):null;
  const records=state.logs.filter(x=>x.status==='completed'&&x.kind==='strength'&&x.id!==r.id&&x.id!==editing&&x.date<r.date&&x.workoutKey===r.workoutKey).sort((a,b)=>b.date.localeCompare(a.date));
  for(const record of records){
    const exercise=record.exercises.find(x=>x.index===e.index&&x.target===e.target);
    if(exercise)return {record,exercise};
  }
  return null;
}
function actualSet(r,s){return s.reps!==null&&s.reps>0&&(r.execution?s.status==='completed':s.status===undefined||s.status==='completed');}
function copyRunValues(i,previousGroup=null){
  validateRunInputs();
  const r=runRecord(),e=r.exercises[i],prior=previousGroup===null?previousRunExercise(r,e):null;
  const swapInfo=swappedInfo(r),swapSub=!!swapInfo&&e.index===swapInfo.to;
  if(previousGroup===null&&(!prior||prior.record.pain!=='none'||prior.record.quality!=='good'))throw Error('没有适合带入的历史记录，请按本次实际情况填写。');
  let filled=0;
  e.sets.forEach((target,j)=>{
    if(target.status!=='pending'||previousGroup!==null&&j!==previousGroup)return;
    const source=previousGroup===null?prior.exercise.sets[j]:e.sets[j-1];
    const sourceRecord=previousGroup===null?prior.record:r;
    if(!source||!actualSet(sourceRecord,source))return;
    for(const field of (swapSub?['reps']:['weight','reps']))if(target[field]===null&&source[field]!==null){target[field]=source[field];filled++;}
  });
  runPersist();
  runNotice=filled?(swapSub?'已带入空白的次数；替代动作的重量需按每只哑铃重新填写，不沿用历史重量，余力也需重新填写。':'已带入空白的重量／次数，请核对本次实际表现；余力和完成状态仍需手动填写。'):'没有可带入的空白字段，已有数据保持不变。';
  renderExecute();
}
function todayFocusMarkup(next){
  const drafts=Object.entries(state.drafts).filter(([,r])=>r.execution&&r.execution.endedAt===null).sort((a,b)=>b[1].execution.startedAt-a[1].execution.startedAt);
  const pending=drafts[0],title=pending?pending[1].workoutTitle:next?next.w.title:state.plan?'本轮计划已处理':'建立你的第一份计划';
  const note=pending?`已完成 ${setSummary(pending[1]).completed}/${setSummary(pending[1]).total} 个工作组，进度已保留。`:next?`${next.e.date===localDate()?'今天':next.e.date<localDate()?'已过计划日期，请先核对或改期':'计划 '+next.e.date} · ${next.w.kind==='strength'?next.w.moves.length+'个动作':'恢复与轻活动'}`:state.plan?'查看近期记录，再安排下一周。':'填写训练条件，确认计划后开始训练。';
  return `<section class="todayfocus ${pending?'rundrafts':''}" aria-labelledby="todayHeading"><div><p class="loghint">${localDate()} · ${esc(state.info.name)}</p><h1 id="todayHeading">${pending?'继续未结束训练':'今天练什么'}</h1><h2>${esc(title)}</h2><p>${esc(note)}</p><button class="action" id="todayAction">${pending?'继续训练':next?next.e.date<localDate()?'查看并调整安排':'开始这节训练':state.plan?'安排下一周':'完善个人档案'}</button>${!pending&&next&&trimEligible(next.e.id)?'<button class="secondary" id="trimToday">时间不足？查看精简方案</button>':''}${!pending&&next&&swapRelevant(next.e.id)?'<button class="secondary" id="swapToday">器械被占？查看替代方案</button>':''}${drafts.length>1?`<details class="otherdrafts"><summary>其他未结束训练（${drafts.length-1}）</summary>${drafts.slice(1).map(([key,r])=>`<p>${esc(r.date)} · ${esc(r.workoutTitle)} <button class="secondary" data-resume-run="${esc(key)}">继续训练</button></p>`).join('')}</details>`:''}</div><div class="todayguide"><strong>${pending?'从上次停下的位置继续':'按自己的节奏完成'}</strong><p>${pending?'组完成状态与休息计时随草稿保留。':'热身 → 正式训练 → 整理 → 保存记录'}</p><p class="loghint">${storageOK?'数据保存在本机，可在个人档案导出备份。':'本机保存失败，请立即导出备份。'}</p></div></section>`;
}
function bindTodayFocus(next){
  document.querySelector('#todayAction').onclick=()=>{
    const draft=Object.entries(state.drafts).filter(([,r])=>r.execution&&r.execution.endedAt===null).sort((a,b)=>b[1].execution.startedAt-a[1].execution.startedAt)[0];
    if(draft){resumeRun(draft[0]);return;}
    if(next&&next.e.date<localDate()){day=next.w.key;setTab('plan');document.querySelector('#rescheduleDate')?.focus();return;}
    if(next)beginRun(next.e.id);else setTab(state.plan?'setup':'profiles');
  };
  document.querySelectorAll('[data-resume-run]').forEach(b=>b.onclick=()=>resumeRun(b.dataset.resumeRun));
  document.querySelector('#trimToday')?.addEventListener('click',()=>{if(next)openTrimPreview(next.e.id);});document.querySelector('#swapToday')?.addEventListener('click',()=>{if(next)openSwapPreview(next.e.id);});
}
function exerciseComparison(r,e){
  const swapInfo=swappedInfo(r);
  if(swapInfo&&e.index===swapInfo.to)return '本次为替代动作：重量口径尚未确认，暂不比较历史重量或同重量表现';
  const prior=previousRunExercise(r,e);
  if(!prior)return '暂无同课程、同目标的更早记录';
  const pe=prior.exercise,complete=(record,exercise)=>exercise.sets.every(s=>actualSet(record,s));
  if(r.pain!=='none'||r.quality!=='good'||prior.record.pain!=='none'||prior.record.quality!=='good')return `上次 ${prior.record.date}；存在不适或质量反馈，本次不作进步比较`;
  if(!complete(r,e)||!complete(prior.record,pe)||e.sets.length!==pe.sets.length||!e.sets.every((s,j)=>s.weight!==null&&s.weight===pe.sets[j].weight))return `上次 ${prior.record.date}；组数、重量或完成情况不同，暂不比较`;
  const total=e.sets.reduce((n,s)=>n+s.reps,0),old=pe.sets.reduce((n,s)=>n+s.reps,0),delta=total-old;
  return `与 ${prior.record.date} 相比：同记录重量、同组数，总次数 ${old} → ${total}（${delta>0?'+':''}${delta}）`;
}
function finishedSummaryMarkup(r){
  if(!r?.execution)return '';
  const s=setSummary(r);
  return `<section class="finishedsummary" aria-labelledby="finishedHeading"><p class="loghint" role="status">${storageOK?'训练已结束，记录已保存到本机。':'本机保存失败，记录仅在当前页面，请立即导出备份。'}</p><h2 id="finishedHeading">本次训练总结${sessionLabel(r)}</h2><p>${esc(r.workoutTitle)} · ${r.date}</p><dl class="summarynumbers"><div><dt>已完成工作组</dt><dd>${s.completed} / ${s.total}</dd></div><div><dt>跳过 / 未处理</dt><dd>${s.skipped} / ${s.total-s.completed-s.skipped}</dd></div><div><dt>${r.kind==='recovery'?'实际活动':'已记录时长'}</dt><dd>${r.minutes===null?'未填写':r.minutes+' 分钟'}</dd></div></dl>${r.session?.kind==='trim'?`<p class="trimsummary">本次精简安排：完成 ${s.completed}/${s.total} 组。相对原计划：${s.completed}/${r.session.original.sets} 组，${r.session.original.sets-s.total} 组按方案未安排（不计跳过）。</p>`:''}${swapSummaryMarkup(r)}${r.execution.endReason?`<p>结束原因：${esc(r.execution.endReason)}</p>`:''}${r.kind==='strength'?`<ul class="summarycomparisons">${r.exercises.map(e=>`<li><strong>${esc(DATA.items[e.index].name)}</strong><span>${esc(exerciseComparison(r,e))}</span></li>`).join('')}</ul><p class="loghint">仅比较记录数值；器械、辅助程度与动作幅度仍需一致，次数变化不直接代表力量提升。热身组另计。</p>`:'<p>已记录恢复活动，按计划休息和恢复也是训练的一部分。</p>'}<details><summary>下次调整参考</summary><ul class="suggestions">${adviceFor(r).map(t=>`<li>${esc(t)}</li>`).join('')}</ul></details><div class="runbuttons"><button class="secondary" id="summaryRecord">查看本次记录</button><button class="action" id="dismissSummary">返回今日安排</button></div></section>`;
}

function priorHint(prior,swapHere){
  if(!prior)return '暂无同课程、同目标的更早记录';
  const sets=prior.exercise.sets.filter(s=>actualSet(prior.record,s));
  if(swapHere)return esc(prior.record.date)+'，次数 '+sets.map(s=>s.reps??'未填').join(' / ')+'（替代动作：重量口径未确认，不显示历史重量）';
  return esc(prior.record.date)+'，'+sets.map(s=>(s.weight??'未填')+'kg × '+s.reps).join(' / ');
}
function mainRunMarkup(r){
  if(r.kind==='recovery')return `<section class="runroutine"><h2>恢复与轻活动</h2><p>按计划进行舒适步行或轻活动，以能轻松交谈为参考。</p><label>实际活动分钟数<input id="runRecoveryMinutes" type="number" min="1" max="180" value="${r.minutes??''}" placeholder="实际填写"></label><button class="action" id="toCool">进入整理 →</button></section>`;
  const i=r.execution.selected,e=r.exercises[i],a=r.execution.actions[i],item=DATA.items[e.index],prior=previousRunExercise(r,e),current=e.sets.findIndex(s=>s.status==='pending');
  const canCopy=prior&&prior.record.pain==='none'&&prior.record.quality==='good',swapInfo=swappedInfo(r),swapHere=!!swapInfo&&e.index===swapInfo.to;
  return `<div class="runmovetabs">${r.exercises.map((e,j)=>`<button class="secondary ${i===j?'selected':''}" data-move="${j}">${j+1}. ${esc(DATA.items[e.index].name)}<small>${{pending:'未开始',in_progress:'进行中',completed:'已完成',partial:'部分完成',skipped:'已跳过'}[actionState(r,j)]}</small></button>`).join('')}</div>
  <section class="runexercise"><div class="paneltitle"><h2>${i+1}. ${esc(item.name)}</h2><span>计划 ${esc(e.target)}</span></div><p class="loghint">${esc(item.rest)} · 上次：${priorHint(prior,swapHere)}</p>
  <div class="runbuttons"><button class="secondary" id="copyHistory" ${canCopy?'':'disabled'}>带入上次重量与次数</button><button class="textbutton" id="startMove">${a.startedAt===null?'开始动作计时':'动作计时已开始'}</button></div><p class="loghint">带入只填写空白项；请核对本次实际次数，余力需重新填写。确认完成本组时也会开始动作计时。</p>${swapHere?`<p class="swapnote">本次为替代动作：${esc(swapInfo.fromName)} 原定 ${esc(swapInfo.fromTarget)}，本次不执行。重量按<b>每只哑铃</b>填写（两只各 20 kg 时记 20 kg），不沿用原动作或历史重量；次数可手动带入，余力需重新填写。</p>`:''}
  <details class="runteaching"><summary>查看动作教学与动图</summary>${coach(item,e.target)}</details>
  <details class="warmsets"><summary>专项热身组 · ${a.warmupSets.length}组，另计</summary><p class="loghint">徒手／空杆／轻阻力开始，逐步准备。这里的组不计入正式工作组。</p>${a.warmupSets.map((s,j)=>`<div class="warmset"><span>热身${j+1}</span><input type="number" min="0" max="1000" step="0.5" aria-label="热身${j+1}重量" data-ai="${i}" data-warm="${j}" data-value="weight" value="${s.weight??''}" placeholder="kg"><input type="number" min="0" max="200" step="1" aria-label="热身${j+1}次数" data-ai="${i}" data-warm="${j}" data-value="reps" value="${s.reps??''}" placeholder="次数"><button class="secondary" data-warm-complete="${j}">${s.status==='completed'?'撤回完成':'完成'}</button></div>`).join('')}<button class="secondary" id="addWarm" ${a.warmupSets.length>=5?'disabled':''}>＋ 添加热身组</button></details>
  <div class="runsets">${e.sets.map((s,j)=>{
    const collapsed=s.status!=='pending';
    return `<${collapsed?'details':'section'} class="runset ${s.status} ${j===current?'current-set':''}" data-set-row="${j}">${collapsed?`<summary>工作组 ${j+1} · ${s.status==='completed'?'已完成':'已跳过'} · ${s.weight??'—'} kg × ${s.reps??'—'} 次<span>展开修改</span></summary>`:`<div class="paneltitle"><strong tabindex="-1">工作组 ${j+1}${j===current?' · 当前组':''}</strong><span>未完成</span></div>`}<div class="runvalues">${[['weight',swapHere?'每只哑铃重量 kg':'重量 kg',1000,.5],['reps','实际次数',200,1],['rir','余力 RIR',10,1]].map(([field,label,max,step])=>`<label>${label}<input type="number" inputmode="${field==='weight'?'decimal':'numeric'}" min="0" max="${max}" step="${step}" data-ai="${i}" data-si="${j}" data-value="${field}" value="${s[field]??''}" placeholder="未填"></label>`).join('')}</div><div class="runbuttons"><button class="${j===current?'action':'secondary'}" data-set="${j}" data-status="completed" ${s.status==='completed'?'disabled':''}>${j===current?'完成本组':'标记完成'}${e.sets.some((q,k)=>k!==j&&q.status==='pending')?'并开始休息':''}</button>${j>0&&!collapsed?`<button class="secondary" data-copy-previous="${j}" ${e.sets[j-1].status==='completed'?'':'disabled'}>沿用上一组</button>`:''}<button class="textbutton" data-set="${j}" data-status="skipped">跳过本组</button><button class="textbutton" data-set="${j}" data-status="pending">撤回</button></div></${collapsed?'details':'section'}>`;
  }).join('')}</div><label>动作感受（可选）<input id="moveNote" maxlength="300" value="${esc(a.note)}" placeholder="例如：动作稳定，最后一组略吃力"></label><label>部分完成／跳过原因<input id="moveReason" maxlength="300" value="${esc(a.reason)}" placeholder="部分完成或跳过时必填"></label><div class="runbuttons"><button class="action" id="finishMove">结束此动作，${i<r.exercises.length-1?'进入下一动作':'进入整理'}</button><button class="textbutton" id="skipMove">跳过整个动作</button>${i<r.exercises.length-1?'<button class="secondary" id="nextMove">稍后处理，查看下一动作</button>':'<button class="secondary" id="toCool">稍后处理，进入整理</button>'}</div></section>`;
}
function runSummaryMarkup(r){const s=setSummary(r),unfinished=r.exercises.filter((e,i)=>!r.execution.actions[i].finished&&!e.sets.every(s=>s.status==='completed')).length;return `<section class="runroutine"><h2>结束前确认${sessionLabel(r)}</h2><p>正式工作组：已完成 ${s.completed}/${s.total} · 跳过 ${s.skipped} · 未处理 ${s.total-s.completed-s.skipped}}${unfinished?'仍有'+unfinished+'个动作未结束。':''}</p>${r.session?.kind==='trim'?`<p class="trimnote">本次为精简安排：正式组 ${s.total}（原计划 ${r.session.original.sets} 组）；${r.session.original.sets-s.total} 组按方案未安排，不计为跳过。</p>`:''}${swapNoteMarkup(r)}<p class="loghint">“结束训练”保留实际完成情况，不补齐空白组。热身与拉伸不计入正式组数。</p><label>实际训练日期<input id="runDate" type="date" value="${r.date}"></label><label>${r.kind==='recovery'?'实际活动分钟数':'本次实际分钟数（可调整）'}<input id="runMinutes" type="number" min="0" max="${r.kind==='recovery'?180:360}" value="${r.minutes??Math.min(360,Math.max(1,Math.round(executionElapsed(r)/60000)))}"></label><p class="loghint">计时时长包含运行中的热身、组间休息和整理；暂停时不累计。若忘记暂停，请按实际情况调整。恢复课分钟数仅填实际活动。</p><label>本次不适<select id="runPain"><option value="none" ${r.pain==='none'?'selected':''}>无</option><option value="some" ${r.pain==='some'?'selected':''}>有，写明情况</option></select></label><label>动作／活动质量<select id="runQuality"><option value="good" ${r.quality==='good'?'selected':''}>基本稳定</option><option value="poor" ${r.quality==='poor'?'selected':''}>难以保持</option></select></label><label>整节感受<textarea id="runNote" maxlength="1500">${esc(r.note)}</textarea></label><label>提前结束／未完成原因<input id="endReason" maxlength="300" value="${esc(r.execution.endReason)}" placeholder="还有未完成组、跳过组或动作时必填"></label><button class="action" id="endRun">确认结束并保存实际记录</button></section>`;}
function finishRun(){validateRunInputs();const original=runRecord(),r=copy(original),date=document.querySelector('#runDate').value,minutes=document.querySelector('#runMinutes').value;r.date=date;r.minutes=minutes===''?null:Number(minutes);r.pain=document.querySelector('#runPain').value;r.quality=document.querySelector('#runQuality').value;r.note=document.querySelector('#runNote').value;r.execution.endReason=document.querySelector('#endReason').value.trim();const s=setSummary(r);if(r.kind==='strength'&&(s.completed<s.total||r.execution.actions.some((a,i)=>!a.finished&&!r.exercises[i].sets.every(s=>s.status==='completed')))&&!r.execution.endReason)throw Error('有未完成或跳过内容，请填写结束原因。');if(r.kind==='recovery'&&!(r.minutes>0))throw Error('请填写实际活动分钟数。');pauseExecution(r);r.execution.endedAt=Date.now();r.execution.timer=null;r.status='completed';const id=runKey.startsWith('edit:')?runKey.slice(5):null;const saved=saveRecord(r,id);delete state.drafts[runKey];persist();runKey=null;runOwner=null;finishedRecordId=saved.id;finishedOwner=state.id;tab='dashboard';render();window.scrollTo({top:0,behavior:'instant'});const n=document.querySelector('#boardmsg');if(n)n.textContent=(storageOK?'已结束并保存。':'保存失败，记录仅在页面内，请导出备份。')+'实际完成'+s.completed+'/'+s.total+'组，未做组保持原状态。';return saved;}
function renderExecute(){clearInterval(runTick);runTick=null;const r=runRecord();if(!r?.execution){main.innerHTML='<p class="notice">没有正在执行的训练。从当天计划或总览开始。</p>';return;}const x=r.execution,s=setSummary(r),t=x.timer,screenKey=runKey+':'+x.phase+':'+x.selected,prior=document.querySelector('.execution'),opened=prior?.dataset.screen===screenKey?[...prior.querySelectorAll('details[open]')].map(d=>d.className+':'+(d.dataset.setRow??'')):[];document.querySelector('#daynav').style.display='none';main.innerHTML=`<section class="execution" data-screen="${esc(screenKey)}"><div class="eyebrow">TRAINING SESSION / ${esc(state.info.name)}</div><div class="headline"><div><h1>${r.session?.kind==='trim'?'<span class="trimtag">精简</span>':r.session?.kind==='swap'?'<span class="swaptag">替换</span>':''}${esc(r.workoutTitle)}</h1><p class="loghint">实际 ${r.date} · 原计划 ${r.scheduledDate||'未关联'} · 正式组 ${s.completed}/${s.total}${r.session?.kind==='trim'?` · 原计划 ${r.session.original.sets} 组`:r.session?.kind==='swap'&&swappedInfo(r)?` · 原动作 ${esc(swappedInfo(r).fromName)} 未执行`:''}</p></div><div class="runbuttons"><button class="secondary" id="runBackup" title="备份包含精简标记；旧版本不识别">导出档案与进度</button><button class="secondary" id="leaveRun">保存进度，返回总览</button></div></div><div class="runclock"><span>本次累计 <b id="sessionClock">${clockText(executionElapsed(r))}</b></span><button class="secondary" id="pauseRun">${x.clockStartedAt===null?'继续训练计时':'暂停训练计时'}</button></div><div class="runphases">${[['warmup','① 热身'],['main','② 正式训练'],['cooldown','③ 整理'],['summary','④ 结束']].map(([key,label])=>`<button class="${x.phase===key?'selected':''}" data-phase="${key}">${label}</button>`).join('')}</div><aside class="runtimer"><div><span>${t?esc(t.label):'组间休息 / 动作计时'}</span><b id="timerClock">${t?clockText(remainingTimer(t)):'—'}</b><small>${t?{running:'正在计时',paused:'已暂停',done:'计时结束，请按恢复情况继续'}[t.state]:'完成一组后自动开始，或手动计时'}</small></div><div class="runbuttons">${t?`<button class="secondary" data-timer="${t.state==='paused'?'resume':'pause'}" ${t.state==='done'?'disabled':''}>${t.state==='paused'?'继续':'暂停'}</button><button class="secondary" data-timer="extend">＋30秒</button><button class="textbutton" data-timer="end">提前结束</button>`:''}<button class="secondary" id="manualTimer">开始90秒休息</button><label class="soundchoice"><input id="timerSound" type="checkbox" ${runSound?'checked':''}>声音辅助</label></div><p class="loghint">锁屏或后台不保证声音提醒；返回时按真实时间恢复倒计时。计时结束不会标记训练完成。</p></aside><p id="runMessage" role="status" class="notice">${esc(runNotice||'进度按档案保存，可从草稿恢复。')}</p><div id="runContent">${['warmup','cooldown'].includes(x.phase)?routineMarkup(r,x.phase):x.phase==='main'?mainRunMarkup(r):runSummaryMarkup(r)}</div><p class="loghint">出现疼痛或明显不适时停止相关动作并记录，不强行完成。<a href="https://www.heart.org/en/healthy-living/exercise-and-physical-activity/fitness-basics/warm-up-cool-down" target="_blank" rel="noopener">热身与整理原则</a> · <a href="https://www.acefitness.org/resources/everyone/blog/5779/the-common-mistakes-people-make-when-warming-up/" target="_blank" rel="noopener">动态热身原则</a></p></section>`;
document.querySelector('#runBackup').onclick=downloadBackup;document.querySelector('#leaveRun').onclick=executeGuard(()=>{pauseExecution(r);if(x.timer?.state==='running'){x.timer.remainingMs=remainingTimer(x.timer);x.timer.state='paused';x.timer.endAt=null;}runPersist();setTab('dashboard')});document.querySelector('#pauseRun').onclick=executeGuard(()=>{if(x.clockStartedAt===null)x.clockStartedAt=Date.now();else pauseExecution(r);runPersist();renderExecute()});document.querySelectorAll('[data-phase]').forEach(b=>b.onclick=executeGuard(()=>{x.phase=b.dataset.phase;runPersist();renderExecute()}));document.querySelectorAll('[data-timer]').forEach(b=>b.onclick=executeGuard(()=>timerAction(b.dataset.timer)));document.querySelector('#manualTimer').onclick=executeGuard(()=>{startTimer(90,'手动组间休息');renderExecute()});document.querySelector('#timerSound').onchange=async e=>{runSound=e.target.checked;if(runSound){try{runAudio??=new (window.AudioContext||window.webkitAudioContext)();await runAudio.resume()}catch{runNotice='当前浏览器不支持声音，仍可查看倒计时。';document.querySelector('#runMessage').textContent=runNotice}}};
if(['warmup','cooldown'].includes(x.phase)){document.querySelectorAll('[data-routine-note]').forEach(input=>input.oninput=executeGuard(()=>{x.routines[x.phase][+input.dataset.routineNote].note=input.value;runPersist()}));document.querySelectorAll('[data-routine]').forEach(b=>b.onclick=executeGuard(()=>{const q=x.routines[x.phase][+b.dataset.routine];if(b.dataset.status==='skipped'&&!q.note.trim())throw Error('请填写跳过原因。');q.status=b.dataset.status;runPersist();renderExecute()}));document.querySelectorAll('[data-routine-timer]').forEach(b=>b.onclick=executeGuard(()=>{const q=x.routines[x.phase][+b.dataset.routineTimer];startTimer(q.seconds,q.title+'（换侧可重新计时）');renderExecute()}));document.querySelector('#phaseNext').onclick=executeGuard(()=>{x.phase=x.phase==='warmup'?'main':'summary';runPersist();renderExecute()});}
if(x.phase==='main'&&r.kind==='strength'){const i=x.selected,a=x.actions[i];document.querySelectorAll('[data-move]').forEach(b=>b.onclick=executeGuard(()=>{x.selected=+b.dataset.move;runPersist();renderExecute()}));document.querySelector('#startMove').onclick=executeGuard(()=>{a.startedAt??=Date.now();a.finished=false;runPersist();renderExecute()});document.querySelectorAll('[data-value]').forEach(input=>input.oninput=executeGuard(()=>updateRunInput(input)));document.querySelectorAll('[data-set]').forEach(b=>b.onclick=executeGuard(()=>markRunSet(i,+b.dataset.set,b.dataset.status)));document.querySelector('#addWarm').onclick=executeGuard(()=>{if(a.warmupSets.length>=5)return;a.warmupSets.push({weight:null,reps:null,status:'pending'});runPersist();renderExecute()});document.querySelectorAll('[data-warm-complete]').forEach(b=>b.onclick=executeGuard(()=>{validateRunInputs();const s=a.warmupSets[+b.dataset.warmComplete];if(s.status!=='completed'&&!(s.reps>0))throw Error('请先填写热身组实际次数。');s.status=s.status==='completed'?'pending':'completed';runPersist();renderExecute()}));for(const [id,key]of [['moveNote','note'],['moveReason','reason']])document.querySelector('#'+id).oninput=executeGuard(()=>{a[key]=document.querySelector('#'+id).value;runPersist()});document.querySelector('#copyHistory').onclick=executeGuard(()=>copyRunValues(i));document.querySelectorAll('[data-copy-previous]').forEach(b=>b.onclick=executeGuard(()=>copyRunValues(i,+b.dataset.copyPrevious)));document.querySelector('#finishMove').onclick=executeGuard(()=>{finishAction(i);if(i<r.exercises.length-1)x.selected++;else x.phase='cooldown';runPersist();renderExecute();document.querySelector('#runContent').scrollIntoView({block:'start'})});document.querySelector('#skipMove').onclick=executeGuard(()=>finishAction(i,true));document.querySelector('#nextMove')?.addEventListener('click',executeGuard(()=>{x.selected++;runPersist();renderExecute()}));}
if(x.phase==='main'&&r.kind==='recovery')document.querySelector('#runRecoveryMinutes').oninput=executeGuard(()=>{const v=document.querySelector('#runRecoveryMinutes').value;setRunField(r,'minutes',v===''?null:Number(v))});document.querySelector('#toCool')?.addEventListener('click',executeGuard(()=>{x.phase='cooldown';runPersist();renderExecute()}));if(x.phase==='summary'){for(const [id,key]of [['runDate','date'],['runMinutes','minutes'],['runPain','pain'],['runQuality','quality'],['runNote','note']])document.querySelector('#'+id).oninput=executeGuard(()=>{const v=document.querySelector('#'+id).value;setRunField(r,key,key==='minutes'?(v===''?null:Number(v)):v)});document.querySelector('#endReason').oninput=executeGuard(()=>{x.endReason=document.querySelector('#endReason').value;runPersist()});document.querySelector('#endRun').onclick=executeGuard(finishRun);}
for(const d of document.querySelectorAll('.execution details'))if(opened.includes(d.className+':'+(d.dataset.setRow??'')))d.open=true;runTick=setInterval(tickExecution,500);}
function editExecution(id){const old=state.logs.find(r=>r.id===id);if(!old?.execution)return;const key='edit:'+id;if(!state.drafts[key]&&Object.keys(state.drafts).length>=100){alert('草稿已达上限，请先导出或提交已有草稿。');return;}const r=copy(state.drafts[key]||old);r.execution.endedAt=null;r.execution.clockStartedAt=null;r.execution.phase='main';r.status='in_progress';state.drafts[key]=r;runKey=key;runOwner=state.id;runNotice='正在修改执行记录。原记录在确认结束保存前保持不变。';runPersist();tab='execute';render();}
function executionReview(r){if(!r.execution)return '';const s=setSummary(r);return `<section class="reviewbox"><h3>执行状态快照</h3>${r.id?`<button class="secondary" onclick="editExecution('${r.id}')">调整组完成状态与动作说明</button>`:''}<p>正式工作组：已完成${s.completed}/${s.total} · 跳过${s.skipped} · 未处理${s.total-s.completed-s.skipped}。热身组另计。</p>${r.session?.kind==='trim'?`<p>本次为精简安排：删除 ${r.session.dropped.length} 个动作，${r.session.original.sets-s.total} 组按方案未安排（不计跳过）。</p>`:''}${swapReviewMarkup(r)}${r.exercises.map((e,i)=>`<p>${esc(DATA.items[e.index].name)}：${{pending:'未开始',in_progress:'进行中',completed:'已完成',partial:'部分完成',skipped:'已跳过'}[actionState(r,i)]} · ${esc(r.execution.actions[i].note||'无感受备注')} ${(r.execution.actions[i].reason||r.execution.endedAt!==null&&r.execution.endReason)?'／原因：'+esc(r.execution.actions[i].reason||r.execution.endReason):''}</p>`).join('')}<p>结束原因：${esc(r.execution.endReason||'无')}</p>${['warmup','cooldown'].map(k=>`<details><summary>${k==='warmup'?'热身':'整理'}记录</summary>${r.execution.routines[k].map(q=>`<p>${esc(q.title)}：${{pending:'未确认',completed:'已完成',skipped:'已跳过'}[q.status]} ${esc(q.note)}</p>`).join('')}</details>`).join('')}</section>`;}

function dashboardSetProgress(s){const records=state.logs.filter(r=>r.status==='completed'&&r.date<=localDate()&&r.execution&&s.entries.some(e=>e.id===r.scheduledId)),trimmed=records.filter(r=>r.session?.kind==='trim'&&r.session.original),total=records.reduce((n,r)=>n+(r.session?.kind==='trim'&&r.session.original?r.session.original.sets:setSummary(r).total),0),done=records.reduce((n,r)=>n+setSummary(r).completed,0),unplanned=trimmed.reduce((n,r)=>n+Math.max(0,r.session.original.sets-setSummary(r).total),0);return `<p class="runprogress">所选计划已结束训练的工作组：${done}/${total}组${trimmed.length?'（按原计划口径）':''}· ${records.length}条执行记录${trimmed.length?`；其中 ${trimmed.length} 次精简训练，${unplanned} 组按方案未安排，不计为跳过`:''}${swapDashNote(records)}。未结束训练、热身组和旧版未标记组不纳入这个比例。</p>`;}
document.querySelectorAll('[data-tab]').forEach(b=>b.onclick=()=>setTab(b.dataset.tab));render();if(main.innerHTML.trim()){document.querySelector('#fallback')?.remove();document.body.classList.add('interactive');}
// 移动端输入体验：软键盘弹出时收起底部导航，并把聚焦输入滚动到键盘上方。仅影响布局，不改变数据。
(function(){const vv=window.visualViewport;if(vv){const sync=()=>document.body.classList.toggle('kb',vv.height+120<window.innerHeight);vv.addEventListener('resize',sync);vv.addEventListener('scroll',sync);sync();}
document.addEventListener('focusin',e=>{const t=e.target;if(!t||!t.matches||!t.matches('input,textarea,select'))return;setTimeout(()=>{const r=t.getBoundingClientRect();if(r.bottom>window.innerHeight-140||r.top<72)t.scrollIntoView({block:'center',behavior:'smooth'});},280);});})();
