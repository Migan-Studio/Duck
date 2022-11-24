import {
  ChatInputCommandInteraction,
  CacheType,
  EmbedBuilder,
  Locale,
  ChannelType,
} from 'discord.js'
import { Command } from '../../../modules/CommandHandler/src'
import { englishUS, ifDM, korean } from '../../localization'

export class InfoCommands extends Command {
  public constructor() {
    super()
    this.name = englishUS.info.name
    this.nameLocalizations = { ko: korean.info.name }
    this.description = englishUS.info.description
    this.descriptionLocalizations = { ko: korean.info.description }
  }
  execute(interaction: ChatInputCommandInteraction<CacheType>) {
    const embed = new EmbedBuilder().setTimestamp()
    if (interaction.locale === Locale.Korean) {
      if (interaction.channel!.type === ChannelType.DM)
        return interaction.reply(ifDM(Locale.Korean))
    }
  }
}
