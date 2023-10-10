import { HttpService } from '@nestjs/axios';
import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('github')
export class GithubController {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}

  @Get(':owner/:repoName')
  async getRepoInfo(
    @Param('owner') owner: string,
    @Param('repoName') repoName: string,
  ) {
    try {
      const repoUrl = `https://api.github.com/repos/${owner}/${repoName}`;
      const commitsUrl = `https://api.github.com/repos/${owner}/${repoName}/commits`;

      const githubToken = this.configService.get<string>('GITHUB_TOKEN');

      const headers = {
        Authorization: `token ${githubToken}`,
      };

      // Obtener información del repositorio
      const repoResponse = await this.httpService
        .get(repoUrl, { headers })
        .toPromise();

      // Obtener commits del repositorio
      const commitsResponse = await this.httpService
        .get(commitsUrl, { headers })
        .toPromise();

      return {
        repoInfo: repoResponse.data,
        commits: commitsResponse.data,
      };
    } catch (error) {
      console.log(error);
      throw new NotFoundException(
        `Repositorio ${owner}/${repoName} no encontrado.`,
      );
    }
  }
}
