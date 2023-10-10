import { HttpService } from '@nestjs/axios';
import { Controller, Get, NotFoundException, Param } from '@nestjs/common';

@Controller('github')
export class GithubController {
  constructor(private httpService: HttpService) {}

  @Get(':owner/:repoName')
  async getRepoInfo(
    @Param('owner') owner: string,
    @Param('repoName') repoName: string,
  ) {
    try {
      const repoUrl = `https://api.github.com/repos/${owner}/${repoName}`;
      const commitsUrl = `https://api.github.com/repos/${owner}/${repoName}/commits`;

      const headers = {
        Authorization: `token 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`, // Asegúrate de que el token esté precedido por la palabra "token"
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
